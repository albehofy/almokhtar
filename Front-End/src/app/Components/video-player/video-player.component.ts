import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  @ViewChild('video', { static: true }) video?: ElementRef;
  @ViewChild('volume', { static: true }) volume?: ElementRef;
  @ViewChild('progress', { static: true }) progress?: ElementRef;

  isvideoNotStart = true;
  videoControlsVisible: boolean = false;
  isvideoPlay: boolean = false;
  isFullScreen: boolean = false;
  isMuted:boolean = false;
  currentTime: number = 0;
  totalTime: number = 0;
  volumeValue: number = 1;
  isVideoRate:Boolean = true;
  videorate:number = 1;
  videoSrc = "https://rr4---sn-hpa7knll.c.drive.google.com/videoplayback?expire=1704845127&ei=F7WdZdihE7241bYPi-aNgAs&ip=156.217.154.112&id=4c4ee815f8912127&itag=18&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=f9&mm=32&mn=sn-hpa7knll&ms=su&mv=m&mvi=4&pl=19&ttl=transient&susc=dr&driveid=1B9rzA4N2ryH9SB0MlhENbpkvBH4Rp_RR&app=explorer&eaua=MLbuuyQ8g5M&mime=video/mp4&vprv=1&prv=1&dur=4461.087&lmt=1704832190280360&mt=1704834038&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRgIhAJ2NhUG-30eYvkuddKbuwdcOBR5EZ4Qg815BPXyCkSzQAiEA-8kbzwCElpSodMV8_THDM054bs9wenLZvN8CNDXF_uw=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIgICIOZVZPUsF9_Uw6tniVqBKdr7W1VAm1T3Iex5awOg8CIQCGCXDoSkBwRvkmw2snqYLeFILcnpEXkzFtanttx4XwCA==&cpn=EA0kDXd-xKb-WEVW&c=WEB_EMBEDDED_PLAYER&cver=1.20240107.00.00";
  constructor() {
    document.addEventListener('webkitfullscreenchange', () => {
      this.isFullScreen = !this.isFullScreen;
    });

    document.addEventListener('mozfullscreenchange', () => {
      this.isFullScreen = !this.isFullScreen;
    });

    document.addEventListener('fullscreenchange', () => {
      this.isFullScreen = !this.isFullScreen;
    });
  }
  playerControlsVisibility = (visibility: boolean) => {
    if(!this.isvideoNotStart){
      this.videoControlsVisible = visibility
    }
  };
  playControlMethod = () => {
    this.isvideoNotStart = false;
      if (this.isvideoPlay) {
        const video: HTMLVideoElement = this.video?.nativeElement;
        video.pause();
        this.isvideoPlay = false
      } else {
        const video: HTMLVideoElement = this.video?.nativeElement;
        video.play();
        this.isvideoPlay = true;
    }
  }
  toggleFullscreen() {
    const videoWrapper: HTMLElement = this.video?.nativeElement.parentElement;

    if (!this.isFullScreen) {
      this.turnFullscreen(videoWrapper);
    } else {
      this.exitFullscreen();
    }
    this.isFullScreen = !this.isFullScreen;
  }

  turnFullscreen(element: HTMLElement) {
    this.isFullScreen = true
    if (element.requestFullscreen) {
      element.requestFullscreen();
      console.log("1")
    } else if ((element as any).webkitRequestFullscreen) {
      (element as any).webkitRequestFullscreen();
      console.log("1.1")

    } else if ((element as any).mozRequestFullscreen) {
      (element as any).mozRequestFullscreen();
      console.log("1.2")
    }
  }
  private exitFullscreen() {
    this.isFullScreen = false
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).mozCancelFullscreen) {
      (document as any).mozCancelFullscreen();
    }
  }
  
  replay() {
    const video = this.video?.nativeElement;
    video.currentTime = 0;
    this.isvideoPlay = true;
    video.play();
  }
  rewind() {
    const video = this.video?.nativeElement;

      video.currentTime = video.currentTime - 10;
  }
    
    // Forward video
    forward(){
    const video = this.video?.nativeElement;
    video.currentTime = video.currentTime + 10;
    }

    toggleMute(){
      const video = this.video?.nativeElement;
      const volume = this.volume?.nativeElement;
      if(this.isMuted) {
        this.isMuted = false;
        video.volume = this.volumeValue
        volume.value = this.volumeValue;
      }else{
        this.isMuted = true;
        video.volume = 0;
        volume.value = 0;
      }
    }
    gettingVolumeValue(evevnt:any){
      const video = this.video?.nativeElement;
      const volumeValue = evevnt.target.value;
      if(volumeValue == 0) {
        this.isMuted = true
        this.volumeValue = 0;
      }else{
        this.isMuted = false;
        this.volumeValue = volumeValue; 
      }
      video.volume = volumeValue
    }
    updateDration(event:any){
      const video = this.video?.nativeElement
      const progress = event.target.value
      const seekTo = (progress / 100) * video.duration;
      video.currentTime = seekTo;
      console.log("hello from the other side!")
    }


    updateTimeDisplay(){
      const video = this.video?.nativeElement; 
      const progress = this.progress?.nativeElement
      this.currentTime = video.currentTime;
      this.totalTime = video.duration;
      progress.value = (video.currentTime / video.duration) * 100;
    }
    updateTotalTime(){
      const video = this.video?.nativeElement; 
      this.totalTime = video.duration;
    }
    playbackRate(videoRate:number){
    const video = this.video?.nativeElement;
      video.playbackRate = videoRate; 
      this.videorate = videoRate
    }
    showRateControls(){
      this.isVideoRate = !this.isVideoRate;
    }
}

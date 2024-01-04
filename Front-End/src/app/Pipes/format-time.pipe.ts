import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    // Assuming value is in seconds
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = Math.floor(value % 60);

    const formattedTime = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
    return formattedTime;
  }

  private pad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

}

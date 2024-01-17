import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.css']
})
export class SwipperComponent implements AfterViewInit {
  @Input() slides: any[] = [];

  @ViewChild('swiperContainer') swiperContainer?: ElementRef;

  // convert number into array with length to llop on this's array in html 
  getNumberArray(limit: number): number[] {
    return Array.from({length: limit}, (_, index) => index + 1);
  }
  ngAfterViewInit(): void {
    const swiper = new Swiper(this.swiperContainer?.nativeElement, {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },    
      breakpoints: {
      285: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2.75,
      },
      1280: {
        slidesPerView: 3.08,
      }
    },
      // navigation: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      pagination: {
        el: '.swiper-pagination', 
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

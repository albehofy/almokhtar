import {  Component, ElementRef, Input, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.css']
})
export class SwipperComponent  {
  @Input() slides: any[] = [];

  @ViewChild('swiperContainer') swiperContainer?: ElementRef;

  getNumberArray(limit: number): number[] {
    return Array.from({ length: limit }, (_, index) => index + 1);
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper(this.swiperContainer?.nativeElement, {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 5, // Smaller space between slides
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 5, // Smaller space between slides
        },
        768: {
          slidesPerView: 2.75,
          spaceBetween: 5, // Smaller space between slides
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 5, // Smaller space between slides
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 5, // Smaller space between slides
        },
      }
      ,
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

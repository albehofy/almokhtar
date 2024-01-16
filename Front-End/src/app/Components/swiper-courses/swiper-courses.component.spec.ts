import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperCoursesComponent } from './swiper-courses.component';

describe('SwiperCoursesComponent', () => {
  let component: SwiperCoursesComponent;
  let fixture: ComponentFixture<SwiperCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwiperCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiperCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

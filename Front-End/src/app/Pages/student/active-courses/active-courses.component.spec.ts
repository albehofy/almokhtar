import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCoursesComponent } from './active-courses.component';

describe('ActiveCoursesComponent', () => {
  let component: ActiveCoursesComponent;
  let fixture: ComponentFixture<ActiveCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

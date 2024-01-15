import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundedComponent } from './not-founded.component';

describe('NotFoundedComponent', () => {
  let component: NotFoundedComponent;
  let fixture: ComponentFixture<NotFoundedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotFoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscripeComponent } from './subscripe.component';

describe('SubscripeComponent', () => {
  let component: SubscripeComponent;
  let fixture: ComponentFixture<SubscripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscripeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

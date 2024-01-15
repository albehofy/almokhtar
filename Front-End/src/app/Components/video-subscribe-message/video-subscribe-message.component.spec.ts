import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSubscribeMessageComponent } from './video-subscribe-message.component';

describe('VideoSubscribeMessageComponent', () => {
  let component: VideoSubscribeMessageComponent;
  let fixture: ComponentFixture<VideoSubscribeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoSubscribeMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoSubscribeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

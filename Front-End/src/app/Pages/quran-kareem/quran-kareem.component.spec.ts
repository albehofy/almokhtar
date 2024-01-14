import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuranKareemComponent } from './quran-kareem.component';

describe('QuranKareemComponent', () => {
  let component: QuranKareemComponent;
  let fixture: ComponentFixture<QuranKareemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuranKareemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuranKareemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

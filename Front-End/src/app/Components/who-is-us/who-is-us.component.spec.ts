import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsUSComponent } from './who-is-us.component';

describe('WhoIsUSComponent', () => {
  let component: WhoIsUSComponent;
  let fixture: ComponentFixture<WhoIsUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhoIsUSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhoIsUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

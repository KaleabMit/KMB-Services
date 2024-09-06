import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveShareComponent } from './have-share.component';

describe('HaveShareComponent', () => {
  let component: HaveShareComponent;
  let fixture: ComponentFixture<HaveShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaveShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaveShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

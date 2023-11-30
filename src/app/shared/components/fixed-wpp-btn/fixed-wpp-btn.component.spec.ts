import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedWppBtnComponent } from './fixed-wpp-btn.component';

describe('FixedWppBtnComponent', () => {
  let component: FixedWppBtnComponent;
  let fixture: ComponentFixture<FixedWppBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedWppBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedWppBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

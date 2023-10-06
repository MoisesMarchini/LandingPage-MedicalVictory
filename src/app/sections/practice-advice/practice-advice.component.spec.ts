import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAdviceComponent } from './practice-advice.component';

describe('PracticeAdviceComponent', () => {
  let component: PracticeAdviceComponent;
  let fixture: ComponentFixture<PracticeAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeAdviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

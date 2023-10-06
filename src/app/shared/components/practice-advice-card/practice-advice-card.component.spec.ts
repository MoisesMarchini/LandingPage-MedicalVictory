import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAdviceCardComponent } from './practice-advice-card.component';

describe('PracticeAdviceCardComponent', () => {
  let component: PracticeAdviceCardComponent;
  let fixture: ComponentFixture<PracticeAdviceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeAdviceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeAdviceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

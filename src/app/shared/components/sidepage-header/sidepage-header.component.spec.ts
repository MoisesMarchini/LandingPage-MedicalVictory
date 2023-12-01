import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepageHeaderComponent } from './sidepage-header.component';

describe('SidepageHeaderComponent', () => {
  let component: SidepageHeaderComponent;
  let fixture: ComponentFixture<SidepageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidepageHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidepageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

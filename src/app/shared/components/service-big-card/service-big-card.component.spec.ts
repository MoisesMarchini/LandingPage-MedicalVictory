import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBigCardComponent } from './service-big-card.component';

describe('ServiceBigCardComponent', () => {
  let component: ServiceBigCardComponent;
  let fixture: ComponentFixture<ServiceBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBigCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

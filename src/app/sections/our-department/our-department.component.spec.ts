import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDepartmentComponent } from './our-department.component';

describe('OurDepartmentComponent', () => {
  let component: OurDepartmentComponent;
  let fixture: ComponentFixture<OurDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

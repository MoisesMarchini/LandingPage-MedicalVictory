import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PracticeAdviceComponent } from './practice-advice/practice-advice.component';
import { SharedModule } from '../shared/shared.module';
import { OurDepartmentComponent } from './our-department/our-department.component';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PracticeAdviceComponent,
    OurDepartmentComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    PracticeAdviceComponent,
    OurDepartmentComponent,
    CoursesComponent
  ]
})
export class SectionsModule { }

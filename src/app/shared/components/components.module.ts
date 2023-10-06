import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeAdviceCardComponent } from './practice-advice-card/practice-advice-card.component';
import { CourseCardComponent } from './course-card/course-card.component';



@NgModule({
  declarations: [
    PracticeAdviceCardComponent,
    CourseCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PracticeAdviceCardComponent,
    CourseCardComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeAdviceCardComponent } from './practice-advice-card/practice-advice-card.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { TeamCardComponent } from './team-card/team-card.component';



@NgModule({
  declarations: [
    PracticeAdviceCardComponent,
    CourseCardComponent,
    TestimonialCardComponent,
    TeamCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PracticeAdviceCardComponent,
    CourseCardComponent,
    TestimonialCardComponent,
    TeamCardComponent
  ]
})
export class ComponentsModule { }

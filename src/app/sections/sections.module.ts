import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PracticeAdviceComponent } from './practice-advice/practice-advice.component';
import { SharedModule } from '../shared/shared.module';
import { OurDepartmentComponent } from './our-department/our-department.component';
import { CoursesComponent } from './courses/courses.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TeamComponent } from './team/team.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PracticeAdviceComponent,
    OurDepartmentComponent,
    CoursesComponent,
    TestimonialsComponent,
    TeamComponent,
    NewsletterComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    PracticeAdviceComponent,
    OurDepartmentComponent,
    CoursesComponent,
    TestimonialsComponent,
    TeamComponent,
    NewsletterComponent,
    FooterComponent
  ]
})
export class SectionsModule { }

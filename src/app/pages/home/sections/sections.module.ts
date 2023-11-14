import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { OurDepartmentComponent } from './our-department/our-department.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OurServicesComponent } from './our-services/our-services.component';



@NgModule({
  declarations: [
    HeaderComponent,
    OurDepartmentComponent,
    CoursesComponent,
    TestimonialsComponent,
    TeamComponent,
    NewsletterComponent,
    FooterComponent,
    OurServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    OurDepartmentComponent,
    CoursesComponent,
    TestimonialsComponent,
    TeamComponent,
    NewsletterComponent,
    FooterComponent,
    OurServicesComponent
  ]
})
export class SectionsModule { }

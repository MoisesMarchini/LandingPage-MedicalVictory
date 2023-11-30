import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { OurDepartmentComponent } from './our-department/our-department.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { EventsComponent } from './events/events.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    OurDepartmentComponent,
    TestimonialsComponent,
    NewsletterComponent,
    OurServicesComponent,
    HeroSliderComponent,
    EventsComponent,
    AboutUsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    OurDepartmentComponent,
    TestimonialsComponent,
    NewsletterComponent,
    OurServicesComponent,
    HeroSliderComponent,
    EventsComponent,
    AboutUsComponent
  ]
})
export class SectionsModule { }

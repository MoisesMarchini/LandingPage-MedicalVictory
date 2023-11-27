import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { OurDepartmentComponent } from './our-department/our-department.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { EventsComponent } from './events/events.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    OurDepartmentComponent,
    TestimonialsComponent,
    TeamComponent,
    NewsletterComponent,
    FooterComponent,
    OurServicesComponent,
    HeroSliderComponent,
    EventsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    OurDepartmentComponent,
    TestimonialsComponent,
    TeamComponent,
    NewsletterComponent,
    FooterComponent,
    OurServicesComponent,
    HeroSliderComponent,
    EventsComponent
  ]
})
export class SectionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryCardComponent } from './primary-card/primary-card.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { SectionComponent } from './section/section.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';



@NgModule({
  declarations: [
    PrimaryCardComponent,
    CourseCardComponent,
    TestimonialCardComponent,
    TeamCardComponent,
    SectionComponent,
    HeroCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimaryCardComponent,
    CourseCardComponent,
    TestimonialCardComponent,
    TeamCardComponent,
    SectionComponent,
    HeroCarouselComponent
  ]
})
export class ComponentsModule { }

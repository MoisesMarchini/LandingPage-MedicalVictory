import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryCardComponent } from './primary-card/primary-card.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { SectionComponent } from './section/section.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    PrimaryCardComponent,
    TestimonialCardComponent,
    TeamCardComponent,
    SectionComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimaryCardComponent,
    TestimonialCardComponent,
    TeamCardComponent,
    SectionComponent,
    SliderComponent
  ]
})
export class ComponentsModule { }

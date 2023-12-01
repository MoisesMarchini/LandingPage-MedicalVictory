import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryCardComponent } from './primary-card/primary-card.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { SectionComponent } from './section/section.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FixedWppBtnComponent } from './fixed-wpp-btn/fixed-wpp-btn.component';
import { ImageWrapperComponent } from './image-wrapper/image-wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceBigCardComponent } from './service-big-card/service-big-card.component';
import { SecondaryCardComponent } from './secondary-card/secondary-card.component';
import { SidepageHeaderComponent } from './sidepage-header/sidepage-header.component';



@NgModule({
  declarations: [
    PrimaryCardComponent,
    TestimonialCardComponent,
    TeamCardComponent,
    SectionComponent,
    HeaderComponent,
    SliderComponent,
    FixedWppBtnComponent,
    FooterComponent,
    ImageWrapperComponent,
    ServiceBigCardComponent,
    SecondaryCardComponent,
    SidepageHeaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    PrimaryCardComponent,
    TestimonialCardComponent,
    TeamCardComponent,
    SectionComponent,
    HeaderComponent,
    SliderComponent,
    FixedWppBtnComponent,
    FooterComponent,
    ImageWrapperComponent,
    ServiceBigCardComponent,
    SecondaryCardComponent,
    SidepageHeaderComponent
  ]
})
export class ComponentsModule { }

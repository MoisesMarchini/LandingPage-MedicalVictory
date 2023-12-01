import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionAnimDirective } from './section-anim.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SectionAnimDirective
  ],
  exports: [
    SectionAnimDirective
  ]
})
export class DirectivesModule { }

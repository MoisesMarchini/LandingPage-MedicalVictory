import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeAdviceCardComponent } from './practice-advice-card/practice-advice-card.component';



@NgModule({
  declarations: [
    PracticeAdviceCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PracticeAdviceCardComponent
  ]
})
export class ComponentsModule { }

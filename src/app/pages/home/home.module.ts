import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { SectionsModule } from './sections/sections.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SectionsModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }

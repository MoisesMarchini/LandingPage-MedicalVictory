import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
  ],
  imports: [
    HomeModule,
    RouterModule,
    CommonModule,
    SharedModule,
  ]
})
export class PagesModule { }

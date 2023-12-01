import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { OurServicesComponent } from './our-services/our-services.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { SectionsModule } from './home/sections/sections.module';

@NgModule({
  declarations: [
    OurServicesComponent,
    AboutComponent,
    ShopComponent
  ],
  imports: [
    HomeModule,
    RouterModule,
    CommonModule,
    SharedModule,
    SectionsModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionAnimDirective } from './shared/directives/section-anim.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule,
    PagesRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [SectionAnimDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }

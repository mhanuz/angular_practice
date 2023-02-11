import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Child1Component } from './first/child1/child1.component';
import { Child2Component } from './first/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    FirstComponent,
    PageNotFoundComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

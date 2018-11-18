import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Comp7Component } from './comp7/comp7.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp7Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
title= '';


}
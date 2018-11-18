import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DacbookComponent } from './dacbook/dacbook.component';

@NgModule({
  declarations: [
    AppComponent,
    DacbookComponent
  ],
  imports: [
     BrowserModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

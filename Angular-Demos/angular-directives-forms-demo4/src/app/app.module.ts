import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LaptopFormComponent } from './components/laptop-form/laptop.form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive.form.component';

import { HighlightDirective } from './directives/highlight.directive';

import { ToUpperCaseFirstPipe } from './pipes/touppercase.first.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LaptopFormComponent,
    ReactiveFormComponent,
    HighlightDirective,
    ToUpperCaseFirstPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

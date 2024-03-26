import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';



@NgModule({
  declarations: [
    AppComponent,
    FormulariosComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [/* ClientesService */],
  bootstrap: [AppComponent]
})
export class AppModule { }

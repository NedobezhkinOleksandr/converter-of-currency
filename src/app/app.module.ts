import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './component/currency-converter/currency-converter.component';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

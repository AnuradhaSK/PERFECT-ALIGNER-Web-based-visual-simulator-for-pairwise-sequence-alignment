import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBootstrapModule } from './app-bootstrap.module';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { AppRoutingModule } from './/app-routing.module';
import { NwalgoComponent } from './nwalgo/nwalgo.component';
import { SwalgoComponent } from './swalgo/swalgo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    NwalgoComponent,
    SwalgoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatGridListModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

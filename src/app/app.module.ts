import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBootstrapModule } from './app-bootstrap.module';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { AppRoutingModule } from './/app-routing.module';
import { NwalgoComponent } from './nwalgo/nwalgo.component';
import { SwalgoComponent } from './swalgo/swalgo.component';
import { SwGridComponent } from './swalgo/sw-grid/sw-grid.component';
import { SwFormComponent } from './swalgo/sw-form/sw-form.component';
import { TcoffeeComponent } from './tcoffee/tcoffee.component';
import { DialignComponent } from './dialign/dialign.component';
import {SharingService} from './services/sharing.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    NwalgoComponent,
    SwalgoComponent,
    SwGridComponent,
    SwFormComponent,
    TcoffeeComponent,
    DialignComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatGridListModule,
    AppBootstrapModule,
    HttpClientModule,
  ],
  providers: [SharingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

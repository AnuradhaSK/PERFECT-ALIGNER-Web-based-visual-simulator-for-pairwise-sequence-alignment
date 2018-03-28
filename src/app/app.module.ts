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
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { AppRoutingModule } from './/app-routing.module';
import { NwalgoComponent } from './components/nwalgo/nwalgo.component';
import { SwalgoComponent } from './components/swalgo/swalgo.component';
import { SwGridComponent } from './components/swalgo/sw-grid/sw-grid.component';
import { SwFormComponent } from './components/swalgo/sw-form/sw-form.component';
import { TcoffeeComponent } from './components/tcoffee/tcoffee.component';
import { DialignComponent } from './components/dialign/dialign.component';
import { SharingService } from './services/sharing.service';
import { NwFormComponent } from './components/nwalgo/nw-form/nw-form.component';
import { NwGridComponent } from './components/nwalgo/nw-grid/nw-grid.component';
import { DialignMenuComponent } from './components/dialign/dialign-menu/dialign-menu.component';
import { DialignPanelComponent } from './components/dialign/dialign-panel/dialign-panel.component';
import { MsaSharingService } from './services/msa-sharing.service';
import { TcoffeeMenuComponent } from './components/tcoffee/tcoffee-menu/tcoffee-menu.component';
import { TcoffeePanelComponent } from './components/tcoffee/tcoffee-panel/tcoffee-panel.component';


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
    DialignComponent,
    NwFormComponent,
    NwGridComponent,
    DialignMenuComponent,
    DialignPanelComponent,
    TcoffeeMenuComponent,
    TcoffeePanelComponent
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
  providers: [SharingService,
    MsaSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

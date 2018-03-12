import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FaqComponent} from './faq/faq.component';
import { NwalgoComponent} from './nwalgo/nwalgo.component';
import { SwalgoComponent } from './swalgo/swalgo.component';
import {TcoffeeComponent} from './tcoffee/tcoffee.component';
import {DialignComponent} from './dialign/dialign.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'home/nwalgo', component: NwalgoComponent},
  {path: 'home/swalgo', component: SwalgoComponent},
  {path: 'home/tcoffee', component: TcoffeeComponent},
  {path: 'home/dialign', component: DialignComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

import {RouterModule,Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { GreetComponent } from './greet/greet.component';
let myRoutes:Routes=[
{path:'',component:DashboardComponent},
{path:'emp',component:EmployeeComponent},
{path:'prod',component:ProductComponent},
{path:'greet',component:GreetComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    EmployeeComponent,
    GreetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

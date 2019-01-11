import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductResolverService } from './product-resolver.service';
let myRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'list-all',component:ProductsListComponent},
  {path:'add-new',component:ProductFormComponent},
  {
    path: 'edit/:prodId',
    resolve: {
      product: ProductResolverService
    },
    component: ProductFormComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsListComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [ProductService,ProductResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }

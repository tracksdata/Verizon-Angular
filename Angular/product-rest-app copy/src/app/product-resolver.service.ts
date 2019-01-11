
import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product';

@Injectable()
export class ProductResolverService implements Resolve<any> {

  constructor(private productService: ProductService) {}
  prod=new Product();
  resolve(route: ActivatedRouteSnapshot) {
    let prodId = route.params['prodId'];
    console.log('----> Product Id: '+prodId);
    
    this.prod=this.productService.loadProduct(prodId);
    console.log('Name: '+JSON.stringify(this.prod));
    return this.productService.loadProduct(prodId);
  }

}
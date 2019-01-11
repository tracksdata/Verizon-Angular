import { HttpClient } from '@angular/common/http';
import { PRODS } from './prods-mock';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  saveProduct(product){
    return this.http.post('http://localhost:3000/api/api/',product);
  }

  loadAll():any{
    return this.http.get('http://localhost:3000/api/api/');
  }
  loadProduct(prodId):any{
  
    return this.http.get(`http://localhost:3000/api/api/${prodId}`)
  }

  deleteProduct(prodId){
    return this.http.delete(`http://localhost:3000/api/api/${prodId}`);
  }

}

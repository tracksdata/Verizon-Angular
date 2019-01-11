import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  prods:Array<any>=[];
  products: any = [];

  constructor(private prodService:ProductService){}

  ngOnInit() {
  this.prodService.loadAll()
  .subscribe(prodData=>{
    this.prods=prodData;
  });

  }//

  deleteItem(id,event){
    console.log('-- dleete');
   // event.preventDefault();
    this.prodService.deleteProduct(id)
    .subscribe(resp=>{
      this.products=this.products.filter(item=>item.id=id);

    });
  }
}


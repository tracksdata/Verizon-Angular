import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private fb:FormBuilder,private route:ActivatedRoute,private router:Router,private prodService:ProductService) { }
  productForm:FormGroup;
  originalProuct: any;
  ngOnInit() {
    this.productForm=this.fb.group(
      {
        id:[],
        name:[''],
        price:[0]
      }
    );

    this.route.data.subscribe(data => {
      console.log('-- data: '+JSON.stringify(data));
      console.dir(data)
      this.productForm.patchValue(data.product)
      this.originalProuct = data.product;
      //this.isEdit = true;
    })


  }//


  
  handleSubmit(){

  if(this.productForm.valid){
     this.prodService.saveProduct(this.productForm.value)
     .subscribe(myData=>{
       this.router.navigate(['list-all']);
      console.log('-- data: '+myData);
     });
     
     
    }

  }

}

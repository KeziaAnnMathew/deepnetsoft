import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductModel } from '../product.model';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addForm: FormGroup | any;
  constructor(public service:ProductservicesService,private router:Router,private formBuilder:FormBuilder) { }
  productItem=new ProductModel('',0,0,'')
  ngOnInit(): void {
    this.addForm =this.formBuilder.group({
      'name':[this.productItem.name,[Validators.required]],
      'price':[this.productItem.price,[Validators.required]],
      'quantity':[this.productItem.quantity,[Validators.required]],
      'category':[this.productItem.category,[Validators.required]],
    })
  }
  addProduct(){
    console.log(this.productItem);
    this.service.addProduct(this.productItem)
    alert("Succesfully added");
    this.router.navigate(['/dashboard'])
  }
}

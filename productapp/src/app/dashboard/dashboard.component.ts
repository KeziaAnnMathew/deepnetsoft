import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductModel } from '../product.model';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products:ProductModel[] | any;
  productsdummy:ProductModel[] | any;
  latest:ProductModel[] | any=[];
  searchkey:string='';
  categorykey:string=''
  private searchKeySubscription=new Subscription
  constructor(private service:ProductservicesService,private router: Router) { }
  filterName='';
  ngOnInit(): void {
    this.service.getallProducts().subscribe((data)=>{
      this.products= JSON.parse(JSON.stringify(data));
      this.productsdummy=this.products;
      this.latestProducts(this.products)
    });
    this.searchKeySubscription= this.service.getSearchKeySubjectAsObs().subscribe((val:any)=>{
      this.filterName=val;
  })  
  }
  addProduct(){
    this.router.navigate(['/addproduct'])
  }
  latestProducts(item:any){
    if(item.length<4){
      console.log(item.length);
      this.latest=item;
      console.log(this.latest);
    }
    else{
      for(var i=0;i<4;i++){
        this.latest.push(item[item.length-1-i]);
      }      
    }
  }
  onsearch(searchvalue:string){
    this.service.setSearchKeySubject(searchvalue)
  }
  onsearchcategory(searchvalue:any){
    this.productsdummy= this.products.filter((item:any) => item.category === searchvalue);
  }
  ngOnDestroy(){
    this.searchKeySubscription.unsubscribe();
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {

  private searchKeySubject=new Subject<string>();
  readonly baseurl='http://localhost:3000';
  constructor(private http:HttpClient) { }


  setSearchKeySubject(searchValue:string){
    this.searchKeySubject.next(searchValue)
  }

  getSearchKeySubjectAsObs(){
    return this.searchKeySubject.asObservable(); 
  }
  

  validateUser(user:any){
    return this.http.post<any>(this.baseurl+`/validateuser`,{"user":user})
  }
  addProduct(item:any){
    return this.http.post<any>(this.baseurl+`/addproduct`,{"item":item})
    .subscribe(()=>{})
  }
  getallProducts(){
    return this.http.get<any>(this.baseurl+`/getproducts`)
  }

}

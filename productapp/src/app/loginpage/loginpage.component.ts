import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  user={
    uname:'',
    password:''
  }
  errorval=false;
  constructor(public service:ProductservicesService,private router:Router) { }

  ngOnInit(): void {
  }
  validateUser(){
    this.service.validateUser(this.user)
    .subscribe(res=>{
      console.log(res)
      if(res==null){
          this.errorval=true
          setTimeout(()=>{
            this.errorval = false;
       }, 2000);
      }
      else if(res.doc,res.token){
        localStorage.setItem('token',res.token)
        this.router.navigate(['/dashboard']);
      }
    })
    
  }
}

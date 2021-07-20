import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displaysetting=true;

  // username:any
  // password:any
  // msg=""
  // login(){
  //   if(this.username=='vysakh123'&& this.password=='vysakh')
  //   {
  //     this.msg="login successfully..."
  //   }
  //   else{
  //     this.msg="incorrect username and password...."
  //   }
  // }

}

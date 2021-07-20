import { Component, OnInit } from '@angular/core';
import { reg } from './reg.model';
import { DataserviceService } from '../services/dataservice.service';
@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  constructor( private serve:DataserviceService) { }

  ngOnInit(): void {
  }

  res=new reg()
  message:any
  insertFn(){
    this.serve.insertdata(this.res).subscribe(result=>{
      this.message=result
      window.location.reload();
      console.log(this.res)
    })
  }

}

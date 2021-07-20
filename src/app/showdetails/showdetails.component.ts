import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { ActivatedRoute } from '@angular/router'
import { reg } from '../user-reg/reg.model';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  constructor(private pass:DataserviceService,private router:ActivatedRoute) { }

  ngOnInit(): void {

    this.showData()
  }
  data:any
  asd:any
  showData(){
    this.pass.getdata().subscribe(res=>{
      this.data=res
      console.log(this.data)
    })
  }
  delete(i:any){
    console.log(i)
    this.pass.deletedata(i).subscribe(result=>{
      alert(result)
      this.showData()
    })
    }
    update(asd:any,index:any){
      console.log("asd",asd)
      this.pass=asd.f_name
      this.pass=asd.l_name
      this.pass=asd.dob
      this.pass=asd.gender
      this.pass=asd.email

    }
    home=new reg();
    activeindex=-1

    onsubmit(){
      if(this.activeindex==-1){
        this.pass.getdata().subscribe(data=>{
          this.showData();
        })
      }
    }
    
  }





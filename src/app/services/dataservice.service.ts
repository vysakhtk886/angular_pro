import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  url: string;

  constructor( private client:HttpClient) {
    this.url = "https://cybersquare.herokuapp.com/user/";
    
   }

  insertdata( data:any){
    console.log(data)
    return this.client.post('https://cybersquare.herokuapp.com/user/',data)
  }
  getdata(){
    return this.client.get('https://cybersquare.herokuapp.com/user/')
  }
  deletedata(id:any){
    return this.client.delete('https://cybersquare.herokuapp.com/user/'+id)
  }
}

import { Component , Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasks';
  private apiUrl = 'http://localhost:3000/consultant';
  data: any = {
   
  };

  constructor(private http: HttpClient)
  {
    //this.loadData()
  }

  html=[];

loadData(){
  this.http.get(this.apiUrl).subscribe((res : Array<Input>)=>{
    this.html=res
  })

 return this.http.get(this.apiUrl) ;
}



}




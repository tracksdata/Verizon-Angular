import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name='James';
  ename:string;
  age:number;
  imgUrl="https://upload.wikimedia.org/wikipedia/en/f/f6/Tom_Tom_and_Jerry.png";

names=['Praveen','James','magi','Sreya','Rajesh'];
 emp={
    ename:'Praveen',
    age:76,
    salary:844885
  }
  

  test(){
    console.log('--- Clicked...');
  }




}

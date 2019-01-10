import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App4';
  message='Good Morning';

  greetMessage:string;
  childMessage:string;
  status=false;
  myData(e){
  this.status=e.target.checked;
 console.log('status: '+e.target.checked);
  }

  greet(msg){
    this.greetMessage=msg;
    
  }

  childGreet(msg){
    this.childMessage=msg;

  }

}

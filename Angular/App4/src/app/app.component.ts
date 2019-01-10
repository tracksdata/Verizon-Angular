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


  getData(msg){
    this.greetMessage=msg;
    console.log('Merssage: '+msg);
  }

}

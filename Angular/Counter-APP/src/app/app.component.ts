import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter-APP';

  totalCount=0;

  getTotal(total){
    this.totalCount=this.totalCount+total;
   // console.log('-- Total Hits: '+this.totalCount);
  }
}

import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor() { }

  @Input()
  dispMessage:string;


  @Output()
  outputMsg:EventEmitter<string>= new EventEmitter();


  ngOnInit() {
    this.outputMsg.emit('Good Morning too');
  }

}

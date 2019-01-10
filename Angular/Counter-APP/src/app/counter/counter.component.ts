import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { NullInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  @Input()
  btnLbl:string;

  @Output()
  totalCount:EventEmitter<number>=new EventEmitter();



  count=0;
  
  counter(){
    this.count++;
    this.totalCount.emit(this.count);
  }

  ngOnInit() {
   
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  empForm:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.empForm=this.fb.group({
      empId:['',Validators.required],
      empName:[''],
      salary:[],
    });
  }
emp:Employee;
getData(empData){
  
this.emp=this.empForm.value;


     }

  

}

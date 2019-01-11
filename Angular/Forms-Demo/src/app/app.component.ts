import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Forms-Demo';
emp:Employee;
  constructor(private es:EmployeeService){}
ngOnInit(){
this.emp=this.es.getEmployee();
}
emps:any[];
getEmps(){
  console.log('--- getting all');
  this.es.listAll().subscribe(emps=>{
    console.log('--- Tesing ');
    console.dir(emps);
  })
}

test(empData){
  this.emp=empData;
  this.es.saveEmployee(this.emp);
//console.log('--- '+JSON.stringify(this.emp))
  }
}

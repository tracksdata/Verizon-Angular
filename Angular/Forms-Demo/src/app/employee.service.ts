import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
emp=new Employee();
  getEmployee<Employee>(){
    return this.emp;
  }

url='http://localhost:3000/api/emps';
 
  saveEmployee(emp){
    console.log('---- saving emp: '+emp.empId+' saved');
    console.log(JSON.stringify(emp));
   return this.http.post(this.url,emp).subscribe(data=>function(){
     console.log('--- test '+data);
   });
    
  }

  listAll():any{
    return this.http.get('http://localhost:3000/api/emps');
  }
}

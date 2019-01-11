import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) { }


  loadAll():any{
    return this.http.get('http://localhost:8090/search/get/');
  }



}

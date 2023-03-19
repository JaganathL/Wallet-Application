import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  employees:Employee[]=[];
  constructor() { }
  getAllEmployees():Employee[]{
    return this.employees;
  }
  addEmployee(newEmployee:Employee):void{

    this.employees.push(newEmployee);
  }

}

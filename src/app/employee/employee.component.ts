import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Models/Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  searchKey: string = "";
  constructor(private service: EmployeeService) {
    this.filteredEmployees = this.service.GetEmployee();
  }

  filteredEmployees: Employee[];

  
  ngOnInit(): void {
    
  }
  search(event: any): Employee[] {
    if (event.target.value === '')
      this.filteredEmployees = this.filteredEmployees;
    else
      this.filteredEmployees = this.filteredEmployees.filter(f => f.Name.toLowerCase().startsWith(event.target.value.toLowerCase()));
    return this.filteredEmployees;
  }
}

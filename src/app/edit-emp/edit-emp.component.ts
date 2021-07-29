import { Component, OnInit } from '@angular/core';
import { Department } from '../../Models/Department';
import { Employee } from '../../Models/Employee';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  constructor() {

    this.departments = [

      { Id: 1, Name: "Payroll" },

      { Id: 2, Name: "Internal" },

      { Id: 3, Name: "HR" }

    ];
  }
  employee: Employee = {
    ID: 3,
    Name: "John",
    Salary: 10000,
    Permanent: true,
    dateOfBirth: new Date('12/31/2000'),

    Department:
    {
      Id: 1,
      Name: "Payroll"
    },
    Skills:
      [{
        Id: 1,
        Name: "HTML"

      },
      {
        Id: 2,
        Name: "CSS"
      },
      {
        Id: 3,
        Name: "Javascript"
        }]

    
  }
  departments: Department[];

  ngOnInit(): void {


  }

  onSubmit(): void {
    console.log(this.employee);
  }

}

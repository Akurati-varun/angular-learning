import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  index: number = 0;
  employeeList: Employee[] = [{
    ID: 1,
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
  },
  {
    ID: 2,
    Name: "Varun",
    Salary: 200000,
    Permanent: true,
    dateOfBirth: new Date('12/31/2000'),

    Department:
    {
      Id: 2,
      Name: "Internal"
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
  },
  {
    ID: 3,
    Name: "Lahari",
    Salary: 100000,
    Permanent: false,
    dateOfBirth: new Date('12/31/2000'),

    Department:
    {
      Id: 3,
      Name: "HR"
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
  },
  {
    ID: 4,
    Name: "Lakshmi",
    Salary: 50000,
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
  },
  {
    ID: 4,
    Name: "Akhil",
    Salary: 70000,
    Permanent: false,
    dateOfBirth: new Date('12/31/2000'),

    Department:
    {
      Id: 2,
      Name: "Internal"
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
  }]

  GetEmployee(): Employee[] {
    return this.employeeList;
  }

  GetEmployeeById(id: number): any {
    return this.employeeList.find(f => f.ID == id);
  }
  EditEmployee(employee: Employee) {
    this.index = this.employeeList.findIndex(f => f.ID == employee.ID);
    this.employeeList[this.index].Name = employee.Name;
    this.employeeList[this.index].Salary = employee.Salary;
    this.employeeList[this.index].Permanent = employee.Permanent;
    this.employeeList[this.index].Department = employee.Department;
    this.employeeList[this.index].Skills = employee.Skills;

  }
  constructor() { }
}

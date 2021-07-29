import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Employee } from '../../Models/Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {
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
  constructor(private route: ActivatedRoute, private router: Router, private service: EmployeeService) {
    this.ngOnInit()
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.employee = this.service.GetEmployeeById(id);
  }
  OnBack() {
    this.router.navigate(['/Employee']);
  }
  
}

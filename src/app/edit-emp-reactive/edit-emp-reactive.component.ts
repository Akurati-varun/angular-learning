import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Employee } from '../../Models/Employee';
import { FormGroup, Validators } from '@angular/forms';
import { Department } from '../../Models/Department';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {
  submitted: boolean = false;
  departments: Department[];
  employee: Employee | any = {
    ID: 3,
    Name: "Jhon",
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
 // Name = new FormControl(this.employee.Name);
  empForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private route: ActivatedRoute, private service: EmployeeService, private router: Router) {

    this.ngOnInit();
    this.departments = [
      { Id: 1, Name: "Payroll" },

      { Id: 2, Name: "Internal" },

      { Id: 3, Name: "HR" }    ];
    this.empForm = this.formbuilder.group({

      ID :[this.employee.ID],
      Name: [this.employee.Name, [

        Validators.required,

        Validators.minLength(4),

        Validators.maxLength(20)

      ]],

      Salary: [this.employee.Salary, [
        Validators.required,
        Validators.min(30000)
      ]]
      ,
      Permanent: [this.employee.Permanent, [
        Validators.required]]
      ,

      Department: [this.employee.Department, [
      ]]
      ,

      Skills: this.formbuilder.array([])

    });
  }
  get f() { return this.empForm.controls; }
  get Skill() { return this.empForm.controls['Skills'] as FormArray }

  onSubmit(employee: any): void {

    this.submitted = true;

    if (this.empForm.invalid) {
      return;
    }
    
    console.log(employee);
    this.service.EditEmployee(employee);
    this.router.navigate(['/Employee']);


  }

  addSkill() {
    const Skill = this.formbuilder.group({
      Id: [],
      Name: ['', Validators.required]
    });
    this.Skill.push(Skill);


    console.log(this.Skill.controls[0]);
  }

  ngOnInit(): void {

    const employeeId = this.route.snapshot.params['id'];
    this.employee = this.service.GetEmployeeById(employeeId);

    console.log(this.empForm);
  }

}

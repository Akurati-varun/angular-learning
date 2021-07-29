import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";
  formData: FormGroup ;
  un: boolean = false;
  constructor(private authservice: AuthService, private router: Router) {
    this.formData = new FormGroup({
      userName: new FormControl(""),
      password: new FormControl(""),
    });}

  ngOnInit(): void {
   
  }
  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    console.log("Login page: " + this.userName);
    console.log("Login page: " + this.password);

    this.authservice.login(this.userName, this.password)
      .subscribe(data => {
        console.log("Is Login Success: " + data);

        if (data) {
          this.un = false;
          this.router.navigate(['/Employee'])
        }
        else {
          this.un = true;
        }
        ;
      });
  }
}

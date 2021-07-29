import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Models/Employee';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';

  movie: string = "Lord of the Rings";

  constructor(private service: AuthService, private route: Router) { }
  logout(): void {
    this.service.logout();
    this.route.navigate(["/Login"]);
  }

}

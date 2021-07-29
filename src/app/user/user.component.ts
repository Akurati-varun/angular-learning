import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  constructor(private service: UserService) {
    this.users = [{ id: 0, email: "", first_name: "", last_name: "", avatar: "" }];
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(d => {
      this.users=d.data
    });
  }

}

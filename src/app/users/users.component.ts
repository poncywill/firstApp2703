

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users;

 
  constructor(private userservice:UserService){}

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(data => this.users = data);
    // this.users=this.userservice.getUsers()
  }

}

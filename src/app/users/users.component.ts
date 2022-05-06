

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users:any=[]
  p:number=1
  errormessage = "loading.........................."

 
  constructor(private userservice:UserService){}

  ngOnInit(): void {
    // this.users=this.userservice.getUsers()
    this.userservice.getUsers().subscribe(data => {this.users = data},(err)=>{this.errormessage=err.message})
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
    public users;
    


  constructor(private userservice:UserService) { }

  ngOnInit(): void {

  }
  loadData(){
    
    this.userservice.getUsers().subscribe(data => this.users = data);
    
  }

}

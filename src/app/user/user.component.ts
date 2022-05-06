import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userid:any
  user:any

  constructor(private route:ActivatedRoute,private userservice:UserService) { }

  ngOnInit(): void {
   this.userid= this.route.snapshot.params['id']
   this.userservice.getUser(this.userid).subscribe(data=>this.user=data)

  }

}

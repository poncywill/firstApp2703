import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from './../user.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
  countries=["INDIA","USA","UK"]
  users:any=[]


  userModel={
    id:"",
    name:"",
    email:"",
    phone:"",
    country:"INDIA"
  }

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
  this.UserService.getUsers().subscribe(data=>{
    this.users=data
  })


  }
  onSubmit(form:NgForm){
    console.log(form);
    }

}

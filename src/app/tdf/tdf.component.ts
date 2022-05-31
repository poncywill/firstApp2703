import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
  countries=["INDIA","USA","UK"]
  userModel={
    name:"",
    email:"pt@gmail.com",
    phone:12344555,
    country:"INDIA"
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form);
    }

}

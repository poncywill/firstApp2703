import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {forbiddenNameValidator} from '../shared/username.validators'

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.scss']
})
export class MdfComponent implements OnInit {
  ageTrue:boolean=false
  userForm:FormGroup
  // userForm=new FormGroup({
  //   username:new FormControl('Poncy'),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state : new FormControl('')

  //   })
  // })

  //moving the below code into ngon init for dynamic validation
  
// userForm=this.fb.group({
//   username:["poncy",[Validators.required,Validators.minLength(3),forbiddenNameValidator]],
//   password:["test"],
//   confirmPassword:["test"],
//   email:["p@gmail.com",Validators.email],
//   age:[''],
//   parentname:[null],
//   address:this.fb.group({
//     city:["ekm"],
//     state:["kerala"]
//   })

// })



  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      username:["poncy",[Validators.required,Validators.minLength(3),forbiddenNameValidator]],
      password:["test"],
      confirmPassword:["test"],
      email:["p@gmail.com",Validators.email],
      age:[''],
      parentname:[null],
      address:this.fb.group({
        city:["ekm"],
        state:["kerala"]
      })
    
    })
    this.userForm.get('age').valueChanges.subscribe(data=>{
      if(data<18){
        this.ageTrue=true

      }
      else{
        this.ageTrue=false

      }
      if(!data){
        this.ageTrue=false
      }
        })
  }
  
loadData(){

   // patChcvalue for loading partial data ,setvalue is strict thats y 

  this.userForm.patchValue({  
    username:"Boss",
    password:"password",
    confirmPassword:"password",
    // address:{
    //   city:"",
    //   state:""
    // }
  })
}
get userName(){
  return this.userForm.get('username')
}
}

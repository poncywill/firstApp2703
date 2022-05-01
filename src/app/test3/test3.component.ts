import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component implements OnInit {

  constructor() { }
  public name:string=""
  displayName=true;
  displayColor="blue"
  public number:string=""
  displayNumber="one"
  num:number=0
  persons=['sanju','dhanya','renjith','cini']

  ngOnInit(): void {
  }
  greet(firstName:any,lastName:any){
    alert("Hello " + firstName.value + lastName.value)

  }
  changePerson(event:any){
    alert("person has changed")
    console.log(event.target.value);
    
  }

}

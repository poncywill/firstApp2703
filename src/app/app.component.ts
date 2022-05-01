import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message=""
  title = "Poncy's";
  name= "poncy";
  
  arr=[10,20,30]
  getName(){
    return this.name
  }
  nameObj={
    name:"John",
    age:20
  }
}

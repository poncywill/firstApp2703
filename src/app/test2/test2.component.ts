import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  classToApply:string="boldFont italicFont"
  isApply:boolean=false;
  fontStyles={
    color:"blue",
    fontStyles:"italic"
  }


  constructor() { }

  ngOnInit(): void {
  }
  onClick(event:any){
     
     console.log(event.type);
     
    this.isApply=!this.isApply;
  

}
 
}
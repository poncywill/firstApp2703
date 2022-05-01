import { Component,EventEmitter, Input, OnInit, Output } from "@angular/core";


@Component({
    selector:'test-comp',
    templateUrl:'./test.component.html',
    styleUrls:['./test.component.css']
})
export class TestComponent implements OnInit{
    constructor(){}
    @Input('parentName') public name

    @Output() public childEvent=new EventEmitter();
    




    fruit:boolean=false;
    isEnabled:boolean=true;
    public myid="testId"
    public image:string=""
    public image2="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    public image1="https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
  ngOnInit():void{
     
  }

  onClick(){
      console.log("hi hello");
      this.fruit=!this.fruit;
      if(this.fruit){
          this.image="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

      }
      else{
          this.image="https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
      }
      
  }
  fireEvent(){
      this.childEvent.emit("hello expetrz")
  }
 
}
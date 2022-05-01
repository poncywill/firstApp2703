import { Component, OnDestroy, OnInit } from '@angular/core';

import { filter, Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit , OnDestroy {

  constructor() { }
  num: any;
  mysubscription:Subscription;

  ngOnInit(): void {

    const promise=new Promise((resolve,reject)=>{
      console.log("promise call...")
      
      setTimeout(()=>{
        resolve("promise is working1")
        resolve("promise is working2")
        resolve("promise is working3")
      },1000)

    })

    // promise.then(data=>console.log(data))

    const observable=new Observable(observer=>{
      console.log("observable call")
      let counter=0;
      
     setInterval(()=>{
       counter=counter+1
       observer.next(counter)
    
     },1000)
      
    })

    // observable.pipe(filter(d=> d==="observable is working2"))
    // .subscribe(data=>{console.log(data)})
  
    // observable.subscribe(data=>{console.log('counter '+ data)})

    this.mysubscription=observable.subscribe(data=>{console.log('counter '+ data)})
  }


  ngOnDestroy(): void {
   this.mysubscription.unsubscribe()
    
  }
}
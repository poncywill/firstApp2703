import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor() { }
  num: any;

  ngOnInit(): void {
    const observable = new Observable(observer => {

      // observer.next(10)
      // observer.next(20)

      setInterval(() => {
        observer.next(10)
      }, 2000)
      setInterval(() => {
        observer.next(20)
      }, 3000)
    })

    observable.subscribe(data=> {
      console.log(data)
      this.num = data
    }
      
      )
  
  }



}
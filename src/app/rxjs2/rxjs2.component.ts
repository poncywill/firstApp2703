import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map,of,from} from 'rxjs';

@Component({
  selector: 'app-rxjs2',
  templateUrl: './rxjs2.component.html',
  styles: [
  ]
})
export class Rxjs2Component implements OnInit {
  

  constructor() { }
  personsList=["jon","tia","hazel"]
  persons:Observable<string[]>=of(this.personsList)

  array=[10,20,30];
  result= from(this.array);



 

  ngOnInit(): void {
    
    // let numbers=of(1,2,3)
    // numbers.pipe(map(x=>x*x)).subscribe(d=>console.log(d))


  this.persons.subscribe(data=>console.log(data))

  this.result.subscribe(x=>console.log(x))


  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  name="poncy"
  today=Date.now()
  num=1.234567
  
  constructor() { }
  

  ngOnInit(): void {
  }

}

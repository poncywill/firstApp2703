import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title="TODO App"
  taskList:any[]=[]

  constructor() { }

  ngOnInit(): void {
  }
addTask(task:string){
this.taskList.push({id:this.taskList.length,name:task})
}
removeTask(id:number){
  this.taskList=this.taskList.filter(task=>task.id!==id)

}
}

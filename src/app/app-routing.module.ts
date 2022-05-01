import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import {Rxjs2Component} from './rxjs2/rxjs2.component'
import { TodoComponent } from './todo/todo.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { UsersComponent } from './users/users.component';

const routes:Routes =[
  // {path:"users",component:UsersComponent},
  // {path:"userdetails",component:UserDetailsComponent}
  {path:'', redirectTo:'rxjs',pathMatch:'full'},   //default route
  {path:"pipes",component:PipesComponent},
  {path:"todo",component:TodoComponent},
  {path:"rxjs",component:RxjsComponent},
  {path:"rxjs2",component:Rxjs2Component},
  {path:"**",redirectTo:'rxjs'}            //any route

]


@NgModule({
  imports: [RouterModule.forRoot(routes),], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

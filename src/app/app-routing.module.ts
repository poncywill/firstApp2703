import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MdfComponent } from './mdf/mdf.component';
import { OfficeComponent } from './office/office.component';
import { PipesComponent } from './pipes/pipes.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import {Rxjs2Component} from './rxjs2/rxjs2.component'
import { TdfComponent } from './tdf/tdf.component';
import { TodoComponent } from './todo/todo.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';

import { UsersComponent } from './users/users.component';

const routes:Routes =[
  {path:"users",component:UsersComponent},
  {path:'user/:id',component:UserComponent,children:[
    {path:'',redirectTo:"home",pathMatch:'full'},
    {path:"home",component:HomeComponent},
    {path:"office",component:OfficeComponent}
  ]},
  {path:"userdetails",component:UserDetailsComponent},
  {path:'', redirectTo:'rxjs',pathMatch:'full'},   //default route
  {path:"pipes",component:PipesComponent},
  {path:"tdf",component:TdfComponent},
  {path:"mdf",component:MdfComponent}  ,
  {path:"todo",component:TodoComponent},
  {path:"rxjs",component:RxjsComponent},
  {path:"rxjs2",component:Rxjs2Component},
  {path:"**",redirectTo:'rxjs'}  //any route
        

]


@NgModule({
  imports: [RouterModule.forRoot(routes),], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

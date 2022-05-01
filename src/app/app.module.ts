import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { PipesComponent } from './pipes/pipes.component';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from '@angular/common/http'
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppRoutingModule } from './app-routing.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { Rxjs2Component } from './rxjs2/rxjs2.component';

@NgModule({
  declarations: [
    AppComponent,TestComponent, Test2Component, Test3Component, PipesComponent, TodoComponent, UsersComponent, UserDetailsComponent, RxjsComponent, Rxjs2Component
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

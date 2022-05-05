import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:3000/users"

  constructor(private http:HttpClient) { }
  getUsers(){
    return[
      {"id":1,"name":"Anil","dob":new Date("05/09/1993"),"salary":1000,"phone":"1234567"},
      {"id":2,"name":"John","dob":new Date("03/07/1999"),"salary":3000,"phone":"34567"},
      {"id":3,"name":"Rani","dob":new Date("11/03/2003"),"salary":40000,"phone":"234567"},
      {"id":4,"name":"Rinil","dob":new Date("07/02/1990"),"salary":8000,"phone":"34567"}
    ]
    // this.http.get(this.url);
  }
}

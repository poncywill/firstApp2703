import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // url="https://jsonplaceholder.typicode.com/users"
  url="http://localhost:3000/users"

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get(this.url).pipe(catchError((err)=>{return throwError(err)}))
    
  }
  getUser(id:any){
    return this.http.get(this.url+`/${id}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './userform/User';
const URL ='http://localhost:8083/user/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  save(user:User){
    return this.http.post(URL,user,{
      headers:{"content-type":'application/json'}
    });
  }
  getAllUsers(){
    return this.http.get(URL);
  }
  delete(userId:number){
    return this.http.delete(URL+userId);
  }
}

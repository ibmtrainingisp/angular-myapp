import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from '../user.service';
import { promise } from 'protractor';
import { HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {  //controller
  title:string="Userform";
  //firstname='Ram';
  user:User=new User(); //model-stores all form data
  UserArray:any;
  constructor(private userService:UserService) { }
  deleteUser(id:number,index:number){
    const observable=this.userService.delete(id);
    observable.subscribe(response =>this.UserArray.splice(index,1))
  }

  save(){
    const observable=this.userService.save(this.user);
    observable.subscribe(response =>{
      console.log(response);
      this.user.id=response;
      alert('user added..');
      this.UserArray.push(Object.assign({},this.user));
      this.user=new User();
    },
    error=> {
      console.log(error);
      alert("error Happened...");
    })
    // console.log('Working....');
    // console.log(this.user.firstname);
    //this.user.firstname='John';
  }

  ngOnInit(): void {
    const observable=this.userService.getAllUsers();
    observable.subscribe(response=>{
      console.log(response);
      this.UserArray=response;
    })
  }

}

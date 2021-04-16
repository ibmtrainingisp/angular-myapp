import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from '../user.service';
import { promise } from 'protractor';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {  //controller
  title:string="Userform";
  //firstname='Ram';
  user:User=new User(); //model-stores all form data
  UserArray:User[]=[];
  constructor(private userService:UserService) { }
  save(){
    const promise=this.userService.save(this.user);
    promise.subscribe(response =>{
      console.log(response);
      alert('user added..');
      this.UserArray.push(Object.assign({},this.user));
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
  }

}

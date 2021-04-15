import { Component, OnInit } from '@angular/core';
import { User } from './User';

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
  save(){
    this.UserArray.push(Object.assign({},this.user));
    console.log('Working....');
    console.log(this.user.firstname);
    //this.user.firstname='John';
  }
  constructor() { }

  ngOnInit(): void {
  }

}

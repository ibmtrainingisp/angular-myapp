import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  title:string="Userform";
  firstname='Ram';
  save(){
    console.log('Working....');
    console.log(this.firstname);
    //this.firstname='John';
  }
  constructor() { }

  ngOnInit(): void {
  }

}

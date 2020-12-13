import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email=''
  password=''
  constructor() { }

  ngOnInit(): void {
  }
  onSignin(){
    console.log(`Email:${this.email}`)
    console.log(`Password:${this.password}`)
  }
  onCancle(){
    this.email=''
    this.password=''
  }

}

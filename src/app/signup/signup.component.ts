import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName=''
  lastName=''
  email=''
  phone=''
  address=''
  constructor() { }

  ngOnInit(): void {
  }
  onSignup(){
    console.log(`First Name:${this.firstName}`)
    console.log(`Last Name:${this.lastName}`)
    console.log(`Email:${this.email}`)
    console.log(`Phone No:${this.phone}`)
    console.log(`Address:${this.address}`)

  }
  onCancel(){
    this.firstName=''
    this.lastName=''
    this.email=''
    this.phone=''
    this.address=''
  }

}

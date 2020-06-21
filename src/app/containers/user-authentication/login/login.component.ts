import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import {UserserviceService} from "../../../services/userservice.service"
import { UserModel } from '../../../model/user-model';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  errorMessage = '';
  loginForm:FormGroup;
  //loginmodel:UserModel=new UserModel();
  loading = false;
  username: any;
  password: any;
  //fname="Geeth";
  //email:any;
  constructor(private formBuilder:FormBuilder ,private userservice: UserserviceService, private router: Router, private matSnackBar:MatSnackBar){}


  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required])
    });

  }

 /* getEmailErrorMessage() {
    return this.email.hasError("required")
    ? " Email is required"
    : this.email.hasError("pattern")
      ? ' '
      : "Please enter a valid email";
  }*/

    onSubmit() {
    console.log(this.loginForm.value);

    this.userservice.login(this.loginForm.value).subscribe((response: any) => {
      console.log(response.message);
      //console.log(response.statusCode);
      if (response.status === 200) {
        this.matSnackBar.open('Successfully Logged in. Welcome!','ok',{duration:5000});
        this.router.navigate(['/dashboard']);

        localStorage.setItem('token', response.token);
        localStorage.setItem('firstName', response.firstName);
        localStorage.setItem('email', response.email);
        
        //localStorage.setItem('email',this.loginForm.get.arguments.email);
        //localStorage.setItem('fname',this.fname);
        //console.log('Token valid: ', response.obj);
        //this.router.navigate(['/dashboard']);
      // } //else {
      //   this.router.navigate(['/login']);
      //   this.errorMessage = response.message;
      //   this.username = '';
      //   this.password = '';
      }
    },
      error => {
        this.router.navigate(['/login']);
        this.loading = false;
        this.errorMessage = 'invalid credentials';
        this.username = '';
        this.password = '';
      }
    );

  }
}

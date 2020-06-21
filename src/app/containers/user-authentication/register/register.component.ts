import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,NgForm } from '@angular/forms'
import { UserserviceService } from '../../../services/userservice.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


 registerForm: FormGroup;
 hide=true;
 loading = true;
  toggle: boolean;
  constructor(private userservice: UserserviceService,private formBuilder:FormBuilder,private snackbar: MatSnackBar,
    private router: Router) {}

  ngOnInit() {
    this.registerForm = new FormGroup(
{
  //hide = true;
  firstName : new FormControl("", [Validators.required,Validators.pattern("^[A-Z][a-z]{2,}$")]),
  lastName : new FormControl("", [Validators.required,Validators.pattern("^[A-Z][a-z]{2,}$")]),
  phoneNumber : new FormControl("", [Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]),
  email : new FormControl("", [ Validators.required, Validators.email]),
  password : new FormControl("", [Validators.required,Validators.pattern("((?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%!]).{8,40})")]),
  confirmPassword : new FormControl("", [Validators.required])
  });
}
  
  get check()
  {
    return this.registerForm.controls;
  }

  register() {
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      return this.router.navigate(['/register']);
    }
    this.userservice.registration(this.registerForm.value).subscribe((response: any) => {
      console.log(response.message);
      // localStorage.setItem("firstName",response.user.firstName);
      this.router.navigate(['/login']);
    },
      error => {
        this.snackbar.open("User already register!!!!");
        this.loading = false;
      }
    );
  }

}

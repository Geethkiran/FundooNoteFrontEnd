import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  updatePasswordForm : FormGroup;
  loading = true;
  //token:string;


  constructor(private formBuilder: FormBuilder, private userservice: UserserviceService,private matSnackBar:MatSnackBar,private route: ActivatedRoute,private route2:Router) { 
  }
  


  ngOnInit() {

    this.updatePasswordForm=new FormGroup(
      {
        emailId: new FormControl('', [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$")]),
  
        password:new FormControl( '', [Validators.required, Validators.pattern("(?=.\\d)(?=.[a-z])(?=.*[A-Z]).{8,}")]),

        confirmPassword: new FormControl('', [Validators.pattern("(?=.\\d)(?=.[a-z])(?=.*[A-Z]).{8,}")]),
  
      }
    );

   // this.route.paramMap.subscribe((params: ParamMap) => {
     // this.token = params.get('token');
    //});

  }

  onSubmit() {
    console.log(this.updatePasswordForm.value);
    // if (this.forgotPasswordForm.invalid) {
    //   return this.route2.navigate(['user/forgotPassword/:token']);
    // }
    

    this.userservice.updatePassword(this.updatePasswordForm.value).subscribe(response => {
console.log ("Inside correct answer",response);
      this.route2.navigate(['/login']);
      this.matSnackBar.open('Your Account updated SuccessFully','ok',{duration:4000});
       },

       error => {
console.log("Inside error",error);
        this.matSnackBar.open('Bad Credentials','ok',{duration:4000});
        console.log(error)
      });
    }


}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar ,MatDialog} from "@angular/material";
import {environment} from '../../../environments/environment';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData: any = " ";
  icon: String = 'dashboard';
  imgFile: File;
  msg: string;
  response: any;
  img = localStorage.getItem("image");
  emailId=localStorage.getItem("email");
  firstName=localStorage.getItem("firstName");

  constructor(       private userservice: UserserviceService,
    private _router: Router,
    private _matSnackBar: MatSnackBar,
    private _matDialog: MatDialog
) { }

  ngOnInit() {}
  
  refresh(): void {
    window.location.reload();
  }

  onFileSelected($event) {
     this.imgFile = $event.target.files[0];
     var formData = new FormData();
  formData.append("file", this.imgFile);
  this.userservice.profilePic(formData).subscribe(
    data => {
    console.log("------------------------------", data);
    this.response = data;
    this.msg = "Uploaded";
    console.log("url ",this.response.data);
    console.log("url2 ",this.response.data.url);
    localStorage.setItem("image", this.response.data);
    //localStorage.setItem("email",this.emailId);
   // localStorage.setItem("name",this.firstName);
  },
  err => {
    console.log("--------------------error--", err);
    this.msg = "Error Occur";

  });
  }
  logout() {
    console.log("signing out => clearing token");


    this._matSnackBar.open(" sucessfully logged out", "ok", {
      duration: 5000
    });

    //localStorage.clear();
      localStorage.removeItem("token");

    this._router.navigateByUrl('/login');  
  }

}

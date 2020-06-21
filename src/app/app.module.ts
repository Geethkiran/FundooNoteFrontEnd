import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "../app/containers/user-authentication/login/login.component";
import { RegisterComponent } from "../app/containers/user-authentication/register/register.component";
//import { UpdatePasswordComponent } from "./containers/user-authentication/update-password/update-password.component";
import { UserActivateComponent } from "./containers/user-authentication/user-activate/user-activate.component";
//import { ForgotPasswordComponent } from "./containers/user-authentication/forgot-password/forgot-password.component";
import { DashboardComponent } from "../app/containers/dashboard/dashboard.component";
import { SidenavComponent } from "./containers/sidenav/sidenav.component";
import { ToolbarComponent } from "./containers/toolbar/toolbar.component";
import { UpdatePasswordComponent } from './containers/user-authentication/update-password/update-password.component';
import { ForgotPasswordComponent } from './containers/user-authentication/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UpdatePasswordComponent,
    UserActivateComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    SidenavComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  //entryComponents: [ UpdateNoteComponent, EditlabelComponent, AddlabelComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

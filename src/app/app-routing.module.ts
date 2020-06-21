import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../app/containers/user-authentication/login/login.component";
import { RegisterComponent } from "../app/containers/user-authentication/register/register.component";
import { UserActivateComponent } from "../app/containers/user-authentication/user-activate/user-activate.component";
import { DashboardComponent } from "../app/containers/dashboard/dashboard.component";
import { UpdatePasswordComponent } from './containers/user-authentication/update-password/update-password.component';
import { ForgotPasswordComponent } from './containers/user-authentication/forgot-password/forgot-password.component';
import { AuthguardService } from './services/authguard/authguard.service';
const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "passwordupdate", component: UpdatePasswordComponent },
  { path: "user/verification/:token", component: UserActivateComponent },
  { path: "user/forgotPassword/:token", component: ForgotPasswordComponent },
  {
    path: "dashboard",
    component: DashboardComponent,canActivate:[AuthguardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

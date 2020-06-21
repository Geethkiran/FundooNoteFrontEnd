import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel} from '../model/user-model'
import { RegisterModel } from '../model/register-model';
import { HttpService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private httpOption = {
    headers: new HttpHeaders( {})
  };

  constructor(private _http: HttpClient, private httpservice: HttpService) { }

  public login(user: UserModel):Observable<any>{
    console.log(user);
    console.log('In login service');
    return this.httpservice.post('http://localhost:8081/user/login', user, this.httpOptions);
  }

  public registration(user: RegisterModel):Observable<any> {
    return this.httpservice.post('http://localhost:8081/user/register', user, this.httpOptions);
  }

  public updatePassword(user: UserModel) {
    console.log(user);
    return this.httpservice.post('http://localhost:8081/user/updatePassword', user, this.httpOptions);
    console.log('entered into registeruser in service');
  }

   public activateUser(user:any,token:string):Observable<any>
  {
    console.log("calling to.."+`${this.activateUser}/${token}`);
    return this.httpservice.put('http://localhost:8081/user/verification/'+`${token}`,user,this.httpOptions);
  }

  public fogotPassword (email:String):Observable<any>
  {
    console.log("Inside update password service");
    return this.httpservice.update('http://localhost:8081/user/forgotPassword/'+email,this.httpOptions);
  }


  profilePic(body: any) :Observable<any>
  {
  
    console.log("res @ user service===>",body);
   return this.httpservice.insert("http://localhost:8081/user/uploadFile", body,this.httpOption);
 }

}

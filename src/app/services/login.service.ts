import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserLogin, UserRegister } from "../modals/user";
import { ResultCreateAccount } from '../vModel/resultCreateAccount';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

// checkAdmin:boolean;

isloggedUser: BehaviorSubject<boolean>;

constructor(private http: HttpClient) {

  this.isloggedUser = new BehaviorSubject<boolean> (this.isLogged());
  
}

  // Login 
  login(user: UserLogin) {
    this.isloggedUser.next(true)
    return this.http.post<ResultCreateAccount<string>>('https://api.mohamed-sadek.com/User/Login', user)
    

  }

  // Sign Up
  signUp(user: UserRegister) {
   
    return this.http.post<ResultCreateAccount<boolean>>('https://api.mohamed-sadek.com/User/POST', user)

  }

  // LOgOut
  logout() {

    let option = {
      headers: new HttpHeaders ({
        "Content-Type":"application/json",
        "token":this.getToken()??''
      })
    }

    console.log(this.getToken()??'')
    // this.isloggedUser.next(false)
    return this.http.post('https://api.mohamed-sadek.com/User/logout', {}, option)

  }

  // Create Function Return  BehaviorSubject
  getUp(): Observable<boolean> {
    return this.isloggedUser.asObservable()
  } 

  setUp(stauts:boolean) {
     this.isloggedUser.next(stauts)
  }

  // Start Token 
  setToken(token: string) {
    localStorage.setItem("token", token)
  }
  getToken(): string | null {
    return localStorage.getItem("token")
  }
  removeToken() {
    localStorage.removeItem("token")
  }


  isLogged(): boolean {
    if (window.localStorage.getItem("token") == null){
      return false
    } else {
       return true

    }
  }


  addTokenAdmin() {

    localStorage.setItem("admin","Y")
    
  }

  removeTokenAdmin(){

    localStorage.removeItem("admin")
  }

}

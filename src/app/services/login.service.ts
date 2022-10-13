import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';
import { UserLogin, UserRegister } from "../modals/user";
import { ResultCreateAccount } from '../vModel/resultCreateAccount';
import { IProducts } from '../modals/Iproducts';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

// Stap On =>  Create V From Type Behavioe Subject 
isloggedUser: BehaviorSubject<boolean>;

isNumberCard: BehaviorSubject<number>

/// 
numberCard :any


// get HttpClient From Common http 
constructor(private http: HttpClient) {

  // Step Two => Create Object From BehaviorSubject Reaturn True Or False 
  this.isloggedUser = new BehaviorSubject<boolean> (this.isLogged());
  this.isNumberCard = new BehaviorSubject<number> (this.numberCardFromSer())
}

  // Function Login 
  login(user: UserLogin) {
    this.isloggedUser.next(true)
    return this.http.post<ResultCreateAccount<string>>('https://api.mohamed-sadek.com/User/Login', user)
    

  }

  // Function Sign Up
  signUp(user: UserRegister) {
   
    return this.http.post<ResultCreateAccount<boolean>>('https://api.mohamed-sadek.com/User/POST', user)

  }

  // Function LOgOut
  logout() {

    let option = {
      headers: new HttpHeaders ({
        "Content-Type":"application/json",
        "token":this.getToken()??''
      })
    }

    // console.log(this.getToken()??'')
    // this.isloggedUser.next(false)
    return this.http.post('https://api.mohamed-sadek.com/User/logout', {}, option)

  }


  // Create Function Return BehaviorSubject True Or False 
  getUp(): Observable<boolean> {
    return this.isloggedUser.asObservable()
  } 

  getNumberCard(): Observable<number> {
    return this.isNumberCard.asObservable()
  } 



  setUp(stauts:boolean) {
     this.isloggedUser.next(stauts)
  }

  // Function Set Token To LocalStorage 
  setToken(token: string) {
    localStorage.setItem("token", token)
  }

  // Function Get Token From LocalStorage
  getToken(): string | null {
    return localStorage.getItem("token")
  }

  // Function Remove Token 
  removeToken() {
    localStorage.removeItem("token")
  }





  // Function Check About LocalStorage 
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




// Test About Observable
list = new Observable((one:any)=> {


  one.next("1")
  one.next("2")
  

})



// Create Function Number Card 
numberCardFromSer(): number {


  if(localStorage.getItem('shopping')) {

     
       this.numberCard = JSON.parse(localStorage.getItem('shopping') || '')
        // console.log(this.numberCard.length)
       return  this.numberCard.length

  } else {


       return 0

  }

}

}

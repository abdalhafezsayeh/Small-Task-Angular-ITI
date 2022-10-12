import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class FirstAuthGuardGuard implements CanActivate {


  // Start constructor
  constructor(private _route: Router, private serv:LoginService) {


  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(state)
      if(this.serv.isLogged())
      {
        console.log("true")
       
        return true
     

      } else {

        console.log("false")
         this._route.navigate(["/login",state.url])
        alert("no Account")
        return false;

      }
      
     
  }
  





}

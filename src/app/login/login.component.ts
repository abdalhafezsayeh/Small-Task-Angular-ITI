import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { concat } from 'rxjs';
import { UserLogin } from '../modals/user';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Create V From Type FormGroup Use Validation 
  addform!:FormGroup;
  // Create V Type Boolean False Use Validation 
  isValid=false;
  // Create V Type String Use In Url 
  returnURL:string = "";


  constructor(private router:Router,private activate:ActivatedRoute,private Auth:LoginService) {
    // Inite Object From V addform Inside Constructor
   this.addform = new FormGroup({

    UserName:new FormControl("",[Validators.required]),
    Password:new FormControl("",[Validators.required]),})}


  
  ngOnInit() {
    // Inite This V From ActivateRoute 
    this.returnURL = this.activate.snapshot.paramMap.get('path')??""
  

  }


  loginUser() {

    // Create V From Type Inteface UserLogin And Inite Value From Value Form 
    let user: UserLogin = this.addform.value as UserLogin
    this.Auth.login(user).subscribe((response) => {

      if (response.Success) {

        this.Auth.setToken(response.Data)
        this.router.navigateByUrl("/main")
        this.Auth.setUp(true)
        // console.log(response)
        if (this.returnURL == '')
          this.router.navigateByUrl("main")
        else
          this.router.navigateByUrl(this.returnURL)
          // console.log(this.returnURL)

      }

      else {

        alert("No Account")

      }


    })

  }

}



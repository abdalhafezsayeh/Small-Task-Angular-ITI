import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserRegister } from '../modals/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-up',
  templateUrl: './login-up.component.html',
  styleUrls: ['./login-up.component.scss']
})
export class LoginUpComponent implements OnInit {
  isCorrect =true;
  Registration: FormGroup;
  constructor(private LogUpFromServices:LoginService,private router:Router) {
    this.Registration = new FormGroup(
      {
       
        Name: new FormControl("", [Validators.required, Validators.minLength(5)]),
        UserName: new FormControl("", [Validators.required, Validators.min(10)]),
        password: new FormControl("", [Validators.required, Validators.minLength(2)]),
    
      });
   }

  ngOnInit(): void {
  }


add() {
  let user:UserRegister = this.Registration.value as UserRegister

  this.LogUpFromServices.signUp(user).subscribe((res)=> {

    if(res.Data) this.router.navigateByUrl("/login") 

    else alert("no")

  })

}




  checkpassword(pas:string, confirmPas:string):boolean {

    //  console.log(pas,confirmPas)
    
        if (pas !== confirmPas) {
         
          return this.isCorrect = false;
    
        } else {
          
         return this.isCorrect = true;
    
        }
    }
    
    convertId(val:string) {
    
      console.log(val)
    
    }



}

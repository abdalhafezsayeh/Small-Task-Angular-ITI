import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent  {
 isCorrect =true;
  // Start Registration
  Registration: FormGroup;
  constructor() {
    
    this.Registration = new FormGroup(
      {
       
        name: new FormControl("", [Validators.required, Validators.minLength(5)]),
        email: new FormControl("exmple@", [Validators.required, Validators.min(10)]),
        password: new FormControl("", [Validators.required, Validators.minLength(2)]),
        password_confirm: new FormControl("", [Validators.required, Validators.minLength(2)]),
      });
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
[x: string]: any;
isloged:boolean
checkAdmin:boolean = false
numberCard:any
  constructor(private checkAboutAccount:LoginService , private ro:Router) {

    this.isloged = this.checkAboutAccount.isLogged()
   }

  ngOnInit(): void {


    // (() => {

    //   if(localStorage.getItem('shopping')) {
    
    //     this.numberCard = JSON.parse(localStorage.getItem('shopping') || '')

    //     console.log(this.numberCard)
    //   }
    
    // })();




    this.checkAboutAccount.getUp().subscribe(status => {

      this.isloged = status

    })


    // Test
    this.checkAboutAccount.getNumberCard().subscribe(st => {

      this.numberCard = st

    })
  }



// Admins 

  addAdmin() {

      this.checkAboutAccount.addTokenAdmin()
      this.checkAdmin = true
      console.log(this.checkAdmin)
      this.ro.navigateByUrl("/login")

  }

  removeAdmin() {

    this.checkAboutAccount.removeTokenAdmin()
    this.checkAdmin = false
    console.log(this.checkAdmin)

  }








}

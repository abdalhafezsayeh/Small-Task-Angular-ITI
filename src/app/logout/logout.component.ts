import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private serv:LoginService, private router:Router) { }

  ngOnInit() {
    this.serv.logout().subscribe(
      (res) => 
      {
        console.log(res)
        this.serv.removeToken()
        this.serv.setUp(false)
        // window.confirm()
        this.router.navigateByUrl('/login/')
      }
  
    )
  }

}

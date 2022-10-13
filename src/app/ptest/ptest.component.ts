import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-ptest',
  templateUrl: './ptest.component.html',
  styleUrls: ['./ptest.component.scss']
})
export class PtestComponent implements OnInit {

  constructor(private li: LoginService) { }

  ngOnInit(): void {

    this.li.list.subscribe({

      next(one)  { console.log(one);},
      complete() {console.log("complete");}

    })

  }

}

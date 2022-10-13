import { Component, OnInit } from '@angular/core';
import {retry, Subject } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'TestAngluar';
  // isloading:boolean=false;

  isloading:Subject<any>;

  constructor(private Loader:LoaderService){
    this.isloading = this.Loader.isLoader
  }

  ngOnInit(): void {
    // this.Loader.getLoader().subscribe(
    //   (datatest)=>{

    //     this.isloading = datatest
    //   }
    // )
  }
}

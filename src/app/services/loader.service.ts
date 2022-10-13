import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
isLoader: Subject<any>
  constructor() {

      this.isLoader = new Subject<any>();


   }

   getLoader() {

     return this.isLoader.asObservable()

   }


   show() {

      this.isLoader.next(true)

   }

   hidden() {

      this.isLoader.next(false)

   }

}

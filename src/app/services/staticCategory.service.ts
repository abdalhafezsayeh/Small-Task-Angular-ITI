import { Injectable } from '@angular/core';
import { Icategory } from '../modals/Icategory';

@Injectable({
  providedIn: 'root'
})
export class StaticCategoryService {
  category:Icategory[]
constructor() {

  this.category = [
    { id: 0, name: "All Product"}, 
    { id: 1, name: 'Mobile' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Display Screen' }
  ]


 }

}

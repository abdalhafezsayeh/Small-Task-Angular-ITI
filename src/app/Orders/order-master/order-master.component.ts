import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/modals/Icategory';
import { SentShopping } from 'src/app/modals/sentShopping';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit {

  category:Icategory[];
  returnValueWithNgmodelToChild:number = 0;

  recevrTotalPriceFromChild:number=0

  toat:SentShopping[] = []
  constructor() { 

  
    if (window.localStorage.getItem("admin") === null) {

      // let checked = JSON.parse(window.localStorage.getItem('admin'));
      console.log("not")
    
    } else {

      console.log("done")
    }


    this.category = [
      { id: 0, name: "All Product"}, 
      { id: 1, name: 'Mobile' },
      { id: 2, name: 'Laptops' },
      { id: 3, name: 'Display Screen' }
    ]


    // this.returnValueWithNgmodelToChild == this.category
  }

  ngOnInit(): void {
  }

  totalPriceFromChild(totalPrice:number) {

    this.recevrTotalPriceFromChild = totalPrice

  }


  test(all:any) {

    this.toat.push(all)
   
  }


  deleteFromMyShopping(index: number) {

    
    if (index !== -1) {
        this.toat.splice(index, 1);
  }
}

// checked = JSON.parse(localStorage.getItem('admin')!);



}
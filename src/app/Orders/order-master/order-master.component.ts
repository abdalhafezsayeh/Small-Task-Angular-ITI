import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/modals/Icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit {

  category:Icategory[];
  returnValueWithNgmodelToChild:number = 0;
  constructor() { 

    this.category = [
      { id: 0, name: "All Product"},  // What
      { id: 1, name: 'Mobile' },
      { id: 2, name: 'Laptops' },
      { id: 3, name: 'Display Screen' }
    ]


    // this.returnValueWithNgmodelToChild == this.category
  }

  ngOnInit(): void {
  }

}

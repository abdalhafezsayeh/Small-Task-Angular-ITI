import { Component, OnInit } from '@angular/core';
import { Product } from '../modals/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  list:Product[]=[]
  constructor() { 

    let p1: Product = { id: 10, name: "Iphone 13 pro max", Quantity:95,Price:1000,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZTqUHLNkwvGjsLThyiD_MRVF8D_UIesKNikqB0ZyxgoQL-RZ3optW4FmiH3jXIjQqDY&usqp=CAU" };
    let p2: Product = { id: 5, name: "samsung s21 ultra", Quantity:58,Price:9000,image:"https://media.btech.com/media/catalog/product/cache/8e279240a6612e9579d3be696bac1c07/s/a/samsung-galaxy-note-20-ultra-black_1.jpg" };
    let p3: Product = { id: 7, name: "oppo find x3 pro", Quantity:10,Price:8000,image:"https://3edda.com/system/mobile_images/images/000/000/765/original/0010241_oppo-find-x-256gb-dual-sim-bordeaux-red-glacier-blue_610.jpg?1604429317" };
    let p4: Product = { id: 8, name: "huawei p30 pro", Quantity:10,Price:8000,image:"https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones/new-phones/series-products/p40-pro-silver.png" };
   
    this.list.push(p1)
    this.list.push(p2)
    this.list.push(p3)
    this.list.push(p4)


  }


  ngOnInit(): void {
  }

}

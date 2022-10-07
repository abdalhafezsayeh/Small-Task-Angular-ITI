import { Component, OnInit } from '@angular/core';
import { Product } from '../modals/product';
import { Icategory } from '../modals/Icategory';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // InterFace Category
  category:Icategory[];
  // InterFace Product
  list:Product[]=[]

  // test 
  showw:number = 1
  
  constructor() { 

  this.category =[
    {id:1, name:'Mobile'},
    {id:2, name:'Laptops'},
    {id:3, name: 'Display Screen'}
  ]

    let p1: Product = { id: 10, category :1, name: "Iphone 13 pro max", Quantity:0,Price:1000,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZTqUHLNkwvGjsLThyiD_MRVF8D_UIesKNikqB0ZyxgoQL-RZ3optW4FmiH3jXIjQqDY&usqp=CAU" };
    let p2: Product = { id: 5, category :1, name: "samsung s21 ultra", Quantity:3,Price:9000,image:"https://media.btech.com/media/catalog/product/cache/8e279240a6612e9579d3be696bac1c07/s/a/samsung-galaxy-note-20-ultra-black_1.jpg" };
    let p3: Product = { id: 7, category :1, name: "oppo find x3 pro", Quantity:4,Price:8000,image:"https://3edda.com/system/mobile_images/images/000/000/765/original/0010241_oppo-find-x-256gb-dual-sim-bordeaux-red-glacier-blue_610.jpg?1604429317" };
    let p4: Product = { id: 8, category :2, name: "laptop Samsung", Quantity:5,Price:8000,image:"https://cdn1.smartprix.com/rx-iR50BHW78-w1200-h1200/R50BHW78.jpg" };
    let p5: Product = { id: 8, category :2, name: "laptop mackbook", Quantity:2,Price:1500,image:"https://www.digitaltrends.com/wp-content/uploads/2021/11/macbook-pro-2021-01.jpg?resize=625%2C417&p=1" };
    let p6: Product = { id: 8, category :2, name: "laptop Dell", Quantity:1,Price:9000,image:"https://www.lifewire.com/thmb/_Z0uM37TmAQBHLcdvpLMsEn96JY=/1500x1001/filters:fill(auto,1)/4136227-4-5c208c9146e0fb00017d21e7.jpg" };
    let p7: Product = { id: 8, category :3, name: "screen samsung", Quantity:1,Price:8000,image:"https://www.dominodisplay.com/media/catalog/product/cache/99b4ecd9c4d5eebe05ee34361d991775/i/m/img_qpa8k_1_1new_1.jpg" };
    let p8: Product = { id: 8, category :3, name: "screen Iphone", Quantity:2,Price:8000,image:"data:image/jpeg;base64,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" };
    let p9: Product = { id: 8, category :3, name: "screen lenovo", Quantity:0,Price:8000,image:"https://www.lenovo.com/medias/61F6MAT2UK%20Listing%20Image.png?context=bWFzdGVyfGltYWdlc3wxMjM3MzN8aW1hZ2UvcG5nfGltYWdlcy9oM2YvaGU4LzEzMDIzMTU3NzgwNTEwLnBuZ3xmYmQxNjJhMWVhN2Y0Nzk1MjE5M2ExZGZlYzFjYzY3OGYzNjQ2NzNiYWY2N2RlMWM4YjIyZGVmMDQzMjZhNmE0" };
    let p10: Product = { id: 8, category :3, name: "screen hp", Quantity:1,Price:8000,image:"https://www.lenovo.com/medias/61F6MAT2UK%20Listing%20Image.png?context=bWFzdGVyfGltYWdlc3wxMjM3MzN8aW1hZ2UvcG5nfGltYWdlcy9oM2YvaGU4LzEzMDIzMTU3NzgwNTEwLnBuZ3xmYmQxNjJhMWVhN2Y0Nzk1MjE5M2ExZGZlYzFjYzY3OGYzNjQ2NzNiYWY2N2RlMWM4YjIyZGVmMDQzMjZhNmE0" };

    this.list.push(p1)
    this.list.push(p2)
    this.list.push(p3)
    this.list.push(p4)
    this.list.push(p5)
    this.list.push(p6)
    this.list.push(p7)
    this.list.push(p8)
    this.list.push(p9)
    this.list.push(p10)



  }

  ngOnInit(): void {
  }
  
  // decrease With Button Buy
dec(item:any) {

  if (item.Quantity > 1) {

    item.Quantity -= 1

  } else {

    item.Quantity = 0
  }

  }




  
}

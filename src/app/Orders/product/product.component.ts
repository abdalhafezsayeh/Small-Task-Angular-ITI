import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProducts } from '../../modals/Iproducts';
import { Icategory } from '../../modals/Icategory';
import { StaticProductsService } from 'src/app/services/staticProducts.service';
import { SentShopping } from 'src/app/modals/sentShopping';
import { from } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {
[x: string]: any;

  // InterFace Category
  // category: Icategory[];
  // Oringnal Products
  originalListProduct: IProducts[] = []
  // Clone Products 
  cloneListProduct: IProducts[] = []
  // Select Value With Ng Model From HTML Element Select (Two Way Binding)
  // returnValueWithNgmodel: number = 0;
  @Input() sendValueFromParent:number=0
  @Output() totalPriceChange: EventEmitter<number>
  @Output() afterShopping: EventEmitter<SentShopping>
  totalPriceAfterShop:number=0
  MsgWithServices:IProducts[] =[]

   allCard:object[]=[];
  // Create Object By Default With Services 
  constructor(private staticServices:StaticProductsService) { 
    this.totalPriceChange= new EventEmitter<number>()
    this.afterShopping= new EventEmitter<SentShopping>()
  } // End constructor



  ngOnChanges(): void {
    
    // this.showWithFilter()
    console.log(this.sendValueFromParent) // test 
    console.log(this.MsgWithServices) // test 
    this.MsgWithServices = this.staticServices.getCategoryID(this.sendValueFromParent)

  }


  // This Is Function Or Interface Ng On Init  
  ngOnInit(): void {
  }
  
  // Function Decrease With Button Buy
  dec(item: any) {

    if (item.Quantity > 1) {

      item.Quantity -= 1

    } else {

      item.Quantity = 0
    }

  }

  totalPrice(priceProduct:any) {
  
        this.totalPriceAfterShop += parseInt(priceProduct.Price) 

        // Publisher Total Price From Childe To Parent 
        // Excute 
        this.totalPriceChange.emit(this.totalPriceAfterShop)
  }



  addTableAfterShopping(id:number,name:string,price:number,image:string) {
      
    this.afterShopping.emit({

      _id: id,
      _name: name,
      _price: price,
      _image: image

    })


  }



  // Function Add To Card 
  addToCard(products:IProducts) {

    // console.log(typeof products);
  
   this.allCard.push(products)

  //  console.log(this.allCard)

    // Check About Account And Then Set Item With Button Add To card To localStorage
    if(localStorage.getItem("token")) {

      localStorage.setItem("shopping", JSON.stringify(this.allCard))

    } 
  

  }


} // End The Class 

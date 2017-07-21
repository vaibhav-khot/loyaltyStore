import { Injectable } from '@angular/core';
import {Item} from "../../Models/item";

@Injectable()
export class CartService {

  private cart:Item[]=[];

  addItem(item:Item){
    this.cart.push(item);
  }

  clearCart(){
    this.cart = [];
  }

  getCart():Item[]{
    return this.cart;
  }

  getTotalPrice(){
    let totalPrice = this.cart.reduce((sum, cartItem)=>{
      return sum+=cartItem.price, sum;
    }, 0 );
    return totalPrice;
  }

  constructor() { }

}

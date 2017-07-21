import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/Cart/cart.service";
import { ItemPreview} from '../item-preview/item-preview.component';
import {Item} from "../Models/item";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {

  private cartItems: Item[] = [];
  private paymentOutput: string = "";
  constructor(
    private cartService:CartService
  ){
    this.cartItems = cartService.getCart();
  }
  ngOnInit() {
  }

}

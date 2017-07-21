import { Component, OnInit ,Input,Output,EventEmitter,NgZone} from '@angular/core';
import {Routes, RouterModule, Router} from "@angular/router";
import {CatalogService} from '../services/Shopping/shopping.service';
import {Item} from "../Models/item";
import {CartService} from "../services/Cart/cart.service";


@Component({
  selector: 'item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.css']
})
export class ItemPreview {
  @Input() item ;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  constructor(
    private router: Router,
    private cartService:CartService,
    private catalogService:CatalogService,
    private zone:NgZone,
   ){
    console.log("rec",this.item);
  }
  ViewDetails(){
    this.router.navigate( ['Item', this.item.id ])
  }
  addToCart(){
    this.cartService.addItem(this.item);
    console.log(this.cartService.getTotalPrice())
  }
  DeleteDetails(i){
    console.log(i)
    this.catalogService.getCatalog().then((catalog)=>{
      console.log(catalog)
      for (var l = 0;l<catalog.length;l++){
        if(catalog[l].id == i.id)
        {
          catalog.splice(l,1);
          this.catalogService.setCatalog(catalog);
          this.delete.emit(catalog);
        }
      }
    });
  }
}

import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CatalogService} from '../services/Shopping/shopping.service';
import {CartService} from "../services/Cart/cart.service";
import {Item} from "../Models/item";

@Component({
  selector: 'item-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class Details {
  private details:Item;
  constructor(private routeParams:ActivatedRoute, private catalogService:CatalogService, private cartService:CartService){
    this.routeParams.params.subscribe(params => {
      console.log(params);
      this.loadDetailsById(params['id']);
    });

  }
  loadDetailsById(id:String):void{
    this.details = this.catalogService.getById(id);
  }
}

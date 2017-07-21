import { Component, OnInit } from '@angular/core';
import {CatalogService} from '../services/Shopping/shopping.service';
import {CartService} from '../services/Cart/cart.service';
import {Item} from "../Models/item";
import { ItemPreview} from '../item-preview/item-preview.component';
import {FilterCatalogItems} from '../Utils/Filter.pipe';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class Catalog {
  public catalog:Item[] = [];
  public search:string = "";
  constructor(
    private catalogService:CatalogService,
    private cartService:CartService
  ){
  }
  ngOnInit() {
    this.catalogService.getCatalog().then((catalog)=>{
      console.log(catalog)
      this.catalog = catalog;
    });
  }
  delete(event) {
    console.log(event);
    this.catalog = event;
  }
}

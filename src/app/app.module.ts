import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Router,Routes, RouterModule } from "@angular/router";
import { CartComponent } from './cart/cart.component';
import {CartService} from "./services/Cart/cart.service"
import {CatalogService} from "./services/Shopping/shopping.service";
import { Catalog } from './catalog/catalog.component';
import { Details } from './details/details.component';
import { ItemPreview} from './item-preview/item-preview.component';
import { FilterCatalogItems} from './Utils/Filter.pipe';
const routes: any = [
  { path:'', name: 'Catalog', component: Catalog },
  { path:'Item/:id', name: 'Details', component: Details },
  { path:'Cart', name: 'Cart', component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    Catalog,
    Details,
    ItemPreview,
    FilterCatalogItems
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CatalogService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

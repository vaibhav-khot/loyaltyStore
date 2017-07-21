import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../Models/item";

@Pipe({name: 'filterItems'})
export class FilterCatalogItems {
  transform(values:Item[], [filterBy]) : any {
    console.log(values)
    return values.filter((item:Item)=>{
      return filterBy ? item.manufacturer.toLowerCase().includes(filterBy.toLowerCase()) || item.name.toLowerCase().includes(filterBy.toLowerCase()) : true;
    });
  }
}

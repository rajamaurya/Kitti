import { Injectable } from '@angular/core';
import {Kittie} from './kittie';
import {KittieListComponent} from './kittie-list/kittie-list.component';
import {KITTIES} from './mock-kitties';

@Injectable()
export class ProductServiceService {

  kittie: Kittie;
  kitties = KITTIES;
  SelectedKittie: Kittie;
  isSelected = false;
  isPaymentSelected = false;
  products = [];
  productCount = 0;
  totalPrice = 0;
  constructor() { }
  getProductDetails(kittie: Kittie): any {

    this.SelectedKittie = kittie;
    this.isSelected = true;
    // alert(this.isSelected);
    this.products.push(kittie);
    if (kittie.id > 1) {
      this.productCount++;
      this.totalPrice += kittie.price;
    }
  }
}

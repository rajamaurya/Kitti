import { Component, OnInit } from '@angular/core';
import {Kittie} from '../kittie';
import {KITTIES} from '../mock-kitties';
import {KittieBuyComponent} from '../kittie-buy/kittie-buy.component';
import {KittieListComponent} from '../kittie-list/kittie-list.component';

@Component({
  selector: 'app-kittie-details',
  templateUrl: './kittie-details.component.html',
  styleUrls: ['./kittie-details.component.css']
})
export class KittieDetailsComponent implements OnInit {
  kittilist: KittieListComponent;
  constructor() {
  }

  ngOnInit() {
  }
  myKittie(): any { }
/*
  buyMyKittie(kittie: Kittie): void {
    alert('hi');
    this.SelectedKittie = kittie;
    this.isSelected = true;
    this.products.push(kittie);
    if (kittie.id > 1) {
      this.productCount++;
      this.totalPrice += kittie.price;
    }
    // this.calculatePayment();
  }
  calculatePayment(): void {
    for (let i = 0; i < this.productCount; i++ ) {
      this.totalPrice += this.products[i].price;
    }
  }
  payToBuyKittie(kittie: Kittie): void {
    this.isPaymentSelected = true;
  }
*/
  payToBuyKittie(kittie: Kittie): void {
    // this.isPaymentSelected = true;
  }
}

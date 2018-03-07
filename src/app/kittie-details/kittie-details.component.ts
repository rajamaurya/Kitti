import { Component, OnInit } from '@angular/core';
import {Kittie} from '../kittie';
import {KITTIES} from '../mock-kitties';
import {KittieBuyComponent} from '../kittie-buy/kittie-buy.component';
import {KittieListComponent} from '../kittie-list/kittie-list.component';
import {ProductServiceService} from '../product-service.service';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-kittie-details',
  templateUrl: './kittie-details.component.html',
  styleUrls: ['./kittie-details.component.css']
})
export class KittieDetailsComponent implements OnInit {
  kittilist: KittieListComponent;
  kittie: String;
  constructor(private route: ActivatedRoute, private productServiceService: ProductServiceService) {
  }
  kits: Kittie;
  showErrorMessage: string;
  kit: number;
  ngOnInit() {
     this.kit = this.route.snapshot.params['id'];
    // alert(this.kit);
    this.getProductById();
  }
  getProductById(): void {
    this.productServiceService.getProductById(this.kit).subscribe((kitObj) =>{this.kits = kitObj; /* alert("Success"+ this.kits); */}, (error) =>
    {
      this.showErrorMessage = "Problem with the service. Please try again!";
      console.log(error);
    });
  }
  clickedSelectedKitti(kittie: String): void {
    this.kittie = kittie;
    console.log(this.kittie);
  }
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

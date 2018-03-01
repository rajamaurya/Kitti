import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {Kittie} from '../kittie';
import {KITTIES} from '../mock-kitties';
// import {Router, RouterModule} from '@angular/router';
// import {ROUTER_PROVIDERS} from '@angular/router/src/router_module';


@Component({
  selector: 'app-kittie-list',
  templateUrl: './kittie-list.component.html',
  styleUrls: ['./kittie-list.component.css'],
 // providers: [ROUTER_PROVIDERS]
})
// @Injectable()
export class KittieListComponent implements OnInit {
  @Output() myEvent = new EventEmitter();
  title = 'Kittie';
  kitties = KITTIES;
  SelectedKittie: Kittie;
  isSelected = false;
  isPaymentSelected = false;
  products = [];
  kittiebject = [];
  productCount = 0;
  totalPrice = 0;
 // router: Router;
  constructor() { }

  ngOnInit() {
  }
   /*toggleSelected(): void {
     this.isSelected = !this.isSelected;
   } */
  onSelectKittie(kittie: Kittie): any {
    this.SelectedKittie = kittie;
    this.isSelected = !this.isSelected;
   // return this.SelectedKittie;
  }

  buyMyKittie(kittie: Kittie): any {
    this.SelectedKittie = kittie;
    this.isSelected = true;
   // alert(this.isSelected);
    this.products.push(kittie);
    if (kittie.id > 1) {
      this.productCount++;
    this.totalPrice += kittie.price;
    this.kittiebject.push(this.SelectedKittie);
    this.myEvent.emit(this.products);
   return [{ selectedOne : this.SelectedKittie,
              Selected: this.isSelected,
              product: this.products
          }
          ];
    // this.router.navigate(['/kittie-details']);
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
}

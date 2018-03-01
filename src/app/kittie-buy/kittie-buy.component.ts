import { Component, OnInit } from '@angular/core';
import {Kittie} from '../kittie';
import {KITTIES} from '../mock-kitties';
import {KittieListComponent} from '../kittie-list/kittie-list.component';

@Component({
  selector: 'app-kittie-buy',
  templateUrl: './kittie-buy.component.html',
  styleUrls: ['./kittie-buy.component.css']
})
export class KittieBuyComponent implements OnInit {
  SelectedKittie: Kittie;
  kitties = KITTIES;
  constructor() { }

  ngOnInit() {
  }
  buyMyKittie(kittie: Kittie): void {
    this.SelectedKittie = kittie;
  }
}

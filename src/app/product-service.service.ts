import { Injectable } from '@angular/core';
import {Kittie} from './kittie';
import {KittieListComponent} from './kittie-list/kittie-list.component';
import {KITTIES} from './mock-kitties';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import '../assets/json.json';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ProductServiceService {

  constructor(private _http: Http) {  }
  
  getProduts(): Observable<Kittie[]>{
    return of (KITTIES);
  } 
  getProductById(id: number): Observable<Kittie>{
   // alert(id);
  //  alert(JSON.stringify(this.getProduts().map((kitties: Kittie[]) => kitties.find(kittie => kittie.id === id))));
    return this.getProduts().map(kitties => kitties.find(kittie => kittie.id == id));
}

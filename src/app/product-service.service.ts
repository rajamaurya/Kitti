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


@Injectable()
export class ProductServiceService {

  constructor(private _http: Http) {  }
  
  /*getProduts(): Observable<Kittie[]>{
    return this._http.get("http://localhost:4200/kittie").map((response: Response) => <Kittie[]>response.json()).catch(this.handleError);
  } */
  getProductById(id: number): Observable<Kittie>{
   // alert(12232);
     return this._http.get('../assets/json.json')
      .map((response: Response) => (<Kittie>response.json()) , (error) => {alert("Hi error" + error);}); 
  /*  return this._http.get('http://localhost:4200/kittie/' + id )
      .map((response: Response) => <Kittie>response.json()); */
  }
}

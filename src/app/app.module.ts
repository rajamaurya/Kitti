import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule,JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { KittieListComponent } from './kittie-list/kittie-list.component';
import { KittieBuyComponent } from './kittie-buy/kittie-buy.component';
import { KittieSellComponent } from './kittie-sell/kittie-sell.component';
import { KittieDetailsComponent } from './kittie-details/kittie-details.component';
import { KittieSiteLayoutComponent } from './kittie-site-layout/kittie-site-layout.component';


import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ProductServiceService} from './product-service.service';

const appRoutes: Routes = [
  {path: 'kittie', component: KittieListComponent},
  {path: 'buy', component: KittieBuyComponent},
  {path: 'kittie-details/:id', component: KittieDetailsComponent},
  {path: '', redirectTo: '/kittie', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    KittieListComponent,
    KittieBuyComponent,
    KittieSellComponent,
    KittieDetailsComponent,
    KittieSiteLayoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, HttpModule, JsonpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

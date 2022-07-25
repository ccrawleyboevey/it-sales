import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InitComponent } from './pages/init/init.component';
import { SalesRoutingModule } from './sales-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './pages/shop/shop.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ShopingCartComponent } from './pages/shoping-cart/shoping-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    InitComponent,
    ShopComponent,
    BlogComponent,
    ShopingCartComponent,
    CheckoutComponent,
    BlogDetailsComponent,
    ShopDetailsComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule
  ]
})
export class SalesModule { }

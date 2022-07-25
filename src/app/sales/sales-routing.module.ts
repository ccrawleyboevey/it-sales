import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { InitComponent } from './pages/init/init.component';
import { ShopComponent } from './pages/shop/shop.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ShopingCartComponent } from './pages/shoping-cart/shoping-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: 'init',
          component: InitComponent
        }, 
        {
          path: 'shop',
          component: ShopComponent
        }, 
        {
          path: 'shop-details',
          component: ShopDetailsComponent
        }, 
        {
          path: 'shoping-cart',
          component: ShopingCartComponent
        }, 
        {
          path: 'checkout',
          component: CheckoutComponent
        }, 
        {
          path: 'contact',
          component: ContactComponent
        }, 
        {
          path: 'blog',
          component: BlogComponent
        }, 
        {
          path: 'blog-details',
          component: BlogDetailsComponent
        }, 
        {
          path: '**',
          redirectTo: 'init'
        }
      ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class SalesRoutingModule { }

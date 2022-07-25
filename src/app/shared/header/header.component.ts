import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  goInit() {
    this.router.navigate(['/sales']);
  }

  goShop() {
    this.router.navigate(['/sales/shop']);
  }

  goShopDetails() {
    this.router.navigate(['/sales/shop-details']);
  }

  goShopingCart() {
    this.router.navigate(['/sales/shoping-cart']);
  }
  
  goCheckout() {
    this.router.navigate(['/sales/checkout']);
  }
  
  goBlogDetails() {
    this.router.navigate(['/sales/blog-details']);
  }

  goBlogPage() {
    this.router.navigateByUrl('/sales/blog');
  }

  goContactPage() {
    this.router.navigate(['/sales/contact']);
  }

}

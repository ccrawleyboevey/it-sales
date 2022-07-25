import { Component, OnInit } from '@angular/core';

declare function atInit(): any;

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styles: [
  ]
})
export class ShopingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    atInit();
  }

}

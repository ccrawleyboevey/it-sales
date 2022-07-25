import { Component, OnInit } from '@angular/core';

declare function atInit(): any;

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styles: [
  ]
})
export class ShopDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    atInit();
  }

}

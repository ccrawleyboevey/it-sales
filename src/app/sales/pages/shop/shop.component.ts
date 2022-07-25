import { Component, OnInit } from '@angular/core';

declare function atInit(): any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styles: [
  ]
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    atInit();
  }

}

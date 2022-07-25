import { Component, OnInit } from '@angular/core';

declare function atInit(): any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [
  ]
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    atInit();
  }

}

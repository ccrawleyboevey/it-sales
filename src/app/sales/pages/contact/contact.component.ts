import { Component, OnInit } from '@angular/core';
declare function atInit(): any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    atInit();
  }

}

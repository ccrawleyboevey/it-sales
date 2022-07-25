import { Component, OnInit } from '@angular/core';

declare function atInit(): any;

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styles: [
  ]
})
export class InitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    atInit();
  }

}

import { Component, OnInit } from '@angular/core';

declare function atInit(): any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: [
  ]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    atInit();
  }

}

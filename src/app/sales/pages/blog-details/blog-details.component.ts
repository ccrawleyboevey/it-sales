import { Component, OnInit } from '@angular/core';

declare function atInit(): any;

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styles: [
  ]
})
export class BlogDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    atInit();
  }

}

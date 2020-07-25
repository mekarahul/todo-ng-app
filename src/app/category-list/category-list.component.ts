import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor() { }
  tasks = [
    {
      "id":1,
      "description":"pay electricity",
    },
    {
      "id":2,
      "description":"pay electricity",
    },
    {
      "id":3,
      "description":"pay electricity",
    }
  ]

  ngOnInit(): void {
  }

}

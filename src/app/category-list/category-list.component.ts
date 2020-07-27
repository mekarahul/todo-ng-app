import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor() { }
  tasks = [
    {
      id: 1,
      description: 'pay electricity',
      categoryId: 2
    },
    {
      id: 1,
      description: 'Go to Gym',
      categoryId: 2
    },
    {
      id: 1,
      description: 'Hair Cut',
      categoryId: 2
    }
  ];
  @Input() categoryTitle: string;
  @Input() categoryId: number;
  ngOnInit(): void {
  }

  addTask(categoryId: number){
    console.log("hi meak", categoryId);
  }

}

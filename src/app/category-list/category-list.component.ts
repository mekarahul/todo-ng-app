import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  list = [
    {
      id: 1,
      title: 'To do',
      todos: [
        {
          id: 1,
          description: 'pay electricity',
          listId: 1
        },
        {
          id: 2,
          description: 'Go to Gym',
          listId: 1
        },
        {
          id: 3,
          description: 'Hair Cut',
          listId: 1
        }
      ]
    },
    {
      id: 2,
      title: 'In Progress',
      todos: [
        {
          id: 4,
          description: 'MEAN stack development',
          listId: 1
        },
        {
          id: 5,
          description: 'Java Development',
          listId: 1
        },
        {
          id: 6,
          description: 'Driving a car',
          listId: 1
        }
      ]
    },
    {
      id: 3,
      title: 'Done',
      todos: [
        {
          id: 7,
          description: 'taking',
          listId: 3
        },
        {
          id: 8,
          description: 'meditation',
          listId: 3
        },
        {
          id: 9,
          description: 'watching news',
          listId: 3
        },
        {
          id: 10,
          description: 'login to work',
          listId: 3
        }
      ]
    }
];

  @Input() categoryTitle: string;
  @Input() categoryId: number;
  connectedTo: number[] = [];
  constructor() {}
  ngOnInit(): void {
  }

  addTask(categoryId: number): void {
    console.log(categoryId);
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}

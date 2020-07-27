import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-ng-app';
  categoryList = [
    {
      id: 1,
      title: 'To Do',
      todos: [
        {
          id: 1,
          description: 'Learn javascript'
        },
        {
          id: 2,
          description: 'Build Tokenizer'
        }
      ]
    },
    {
      id: 2,
      title: 'In progress',
      todos: [
        {
          id: 1,
          description: 'Interview'
        },
        {
          id: 2,
          description: 'Develop the todo app'
        }
      ]
    },
    {
      id: 3,
      title: 'Done',
      todos: [
        {
          id: 1,
          description: 'Bath'
        },
        {
          id: 1,
          description: 'Lunch'
        },
        {
          id: 2,
          description: 'take studies of the kids'
        }
      ]
    }
  ];
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() description: string;
  @Input() listId: number;
  constructor() { }

  ngOnInit(): void {
  }
  editTodo(listId: number): void {
    console.log(listId);
  }

  deleteTodo(listId: number): void {
    console.log(listId);
  }

}

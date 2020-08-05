import { DeleteListDialogComponent } from './../delete-list-dialog/delete-list-dialog.component';
import { DeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { EditlistDialogComponent } from './../editlist-dialog/editlist-dialog.component';
import { Observable } from 'rxjs';
import { CreateDialogComponent } from './../create-dialog/create-dialog.component';
import { MatDialog } from '@angular/material/dialog';

import { List } from './../list.model';
import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoService } from './../todo.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {

  list$: Observable<List[]>;
  list: List;
  @Input() categoryTitle: string;
  @Input() categoryId: number;
  constructor(private todoService: TodoService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.list$ = this.todoService.getTodoList();
  }
  addTask(categoryId: number): void {
    console.log(categoryId);
  }
  drop(event: CdkDragDrop<string[]>): void {
    const listId: number = parseInt(event.container.element.nativeElement.id);
    const todoId: number = parseInt(event.item.element.nativeElement.id);
    this.todoService.updateTodoStatus(todoId, listId).subscribe((res) => console.log(res));
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  handleDelete(): void {
    this.list$ = this.todoService.getTodoList();
  }

  addTodo(listId: number): void {
    const addDialogRef = this.dialog.open(CreateDialogComponent, {
      width: '300px',
      data: { listId }
    });
    addDialogRef.afterClosed().subscribe((res) => {
      this.list$ = this.todoService.getTodoList();
    });
  }
  handleNewList(): void {
    this.list$ = this.todoService.getTodoList();
  }

  editTodo(listId): void {
    this.todoService.getListById(listId).subscribe((item) => {
      this.list = item;
      const editListDialogRef = this.dialog.open(EditlistDialogComponent, {
        width: '300px',
        data: this.list
      });
      editListDialogRef.afterClosed().subscribe((res) => {
        this.list$ = this.todoService.getTodoList();
      });
    }
    );
  }
  openDeleteListDialog(listId): void{
    const delListDialogRef = this.dialog.open(DeleteListDialogComponent,{
      width: '300px',
      data: {id: listId}
    });
    delListDialogRef.afterClosed().subscribe((res) => {
      this.list$ = this.todoService.getTodoList();
    });
  }
}

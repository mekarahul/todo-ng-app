import { Task } from './../task.model';
import { IAppState } from './../store/reducers/todoReducer';

import { DeleteListDialogComponent } from './../delete-list-dialog/delete-list-dialog.component';
import { DeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { EditlistDialogComponent } from './../editlist-dialog/editlist-dialog.component';
import { Observable } from 'rxjs';
import { CreateDialogComponent } from './../create-dialog/create-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NgRedux, select } from '@angular-redux/store';
import { List } from './../list.model';
import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoService } from './../todo.service';
import { loadTodos } from './../store/actions/todo-actions';
import _ from 'lodash';
import { deleteTodo } from './../store/actions/todo-actions';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {

  list: List;
  @Input() categoryTitle: string;
  @Input() categoryId: number;
  listItem: any;
  todos: any;

  constructor(private todoService: TodoService, private dialog: MatDialog, private ngRedux: NgRedux<IAppState>) { }
  ngOnInit(): void {
    /*this.todoService.getTodoList().subscribe((list) => {
      this.ngRedux.dispatch(LoadTodoList(list));
    });
    */
    /*this.todoService.getAllTodo().subscribe((Todos) => {
      this.ngRedux.dispatch(loadTodos(Todos));
    });*
    this.ngRedux.subscribe(() => this.readState());
    this.readState();
    console.log(this.ngRedux.getState());
    */
    this.ngRedux.subscribe(() => this.readState());
    this.readState();
  }

  readState(): void {
    const state: any = this.ngRedux.getState() as IAppState;
    this.listItem = state.entities.list;
    this.todos = state.entities.todos;
    this.listItem = _.values(this.listItem);
    this.todos = Object.entries(this.todos);
  }
  checkIfObject(obj): string{
    return typeof(obj);
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
  handleDelete(task): void {
    this.ngRedux.dispatch(deleteTodo(task));
  }

  addTodo(listId: number): void {
    const addDialogRef = this.dialog.open(CreateDialogComponent, {
      width: '300px',
      data: { listId }
    });
    addDialogRef.afterClosed().subscribe((res) => {
      //this.list$ = this.todoService.getTodoList();
    });
  }

  handleNewList(): void {
    //this.list$ = this.todoService.getTodoList();
  }

  editTodo(listId): void {
    this.todoService.getListById(listId).subscribe((item) => {
      this.list = item;
      const editListDialogRef = this.dialog.open(EditlistDialogComponent, {
        width: '300px',
        data: this.list
      });
      editListDialogRef.afterClosed().subscribe((res) => {
        //this.list$ = this.todoService.getTodoList();
      });
    }
    );
  }
  openDeleteListDialog(listId): void {
    const delListDialogRef = this.dialog.open(DeleteListDialogComponent, {
      width: '300px',
      data: { id: listId }
    });
    delListDialogRef.afterClosed().subscribe((res) => {
      //this.list$ = this.todoService.getTodoList();
    });
  }

  test() {
    console.log(this.ngRedux.getState());
    console.log(this.todos);
  }

  // addTodo(description) {
  //   const newTodo = {
  //     id: 100,
  //     listId: 100,
  //     description
  //   };
  //   this.ngRedux.dispatch(addArticle(newTodo));
  // }
}

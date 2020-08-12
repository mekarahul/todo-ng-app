
import { addTodoToList } from '../store/actions/todo-actions';
import { UniqueTodoListService } from './../unique-todo-list.service';
import { TodoService } from './../todo.service';
import { Task } from './../task.model';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/reducers/todoReducer';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder, private todoService: TodoService,
    private uniqueList: UniqueTodoListService,
    private ngRedux: NgRedux<IAppState>
    ) { }
  creatForm = this.fb.group(
    {
      description: ["", Validators.required],
    }
  );
  ngOnInit(): void {}
  onSubmit(): void{
    const newTodo: Task = new Task(this.creatForm.value.description, this.data.listId);
    this.ngRedux.dispatch(addTodoToList(newTodo));
    this.dialogRef.close();
    /*this.todoService.newTodo(newTodo).subscribe(
      (res) => {
        this.dialogRef.close(res);
      }
    );*/
  }
/*
  addTodo(): void {
    const newTodo: Task = new Task(this.creatForm.value.description, this.data.listId);
    console.log(this.data.listId);
    console.log(newTodo);
    this.ngRedux.dispatch(addTodoToList(newTodo));
    this.todoService.newTodo(newTodo).subscribe(
      (res) => {
        this.dialogRef.close(res);
      }
    );
  }*/
}

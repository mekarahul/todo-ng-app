import { AbstractControl } from '@angular/forms';
import { UniqueTodoListService } from './../unique-todo-list.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TodoService } from './../todo.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { List } from '../list.model';

@Component({
  selector: 'app-addlist-dialog',
  templateUrl: './addlist-dialog.component.html',
  styleUrls: ['./addlist-dialog.component.scss']
})
export class AddlistDialogComponent implements OnInit{
  todoListForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private dialogRef: MatDialogRef<AddlistDialogComponent>,
    private uniqueList: UniqueTodoListService) { }
    get title(): AbstractControl{
      return this.todoListForm.get('title');
    }
  createForm(): void{
    this.todoListForm = this.fb.group({
      title: ['', Validators.required, this.uniqueList.checkForUniqueList()]
    });
  }

  onSubmit(): void {
    if (this.todoListForm.valid) {
      const newList = new List(this.todoListForm.value.title);
      this.todoService.newList(newList).subscribe((res) => console.log(res));
    }
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.createForm();
  }
}

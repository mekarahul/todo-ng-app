import { NgRedux } from '@angular-redux/store';
import { TodoService } from './../todo.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Task } from '../task.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Task,
    private todoService: TodoService
  ) { }
  ngOnInit(): void {
  }
  deleteNo(): void {
    this.dialogRef.close();
  }
  deleteTask(): void{
    this.todoService.deleteTodo(this.task).subscribe((todo) => {
      this.dialogRef.close(this.task);
    }
    );
  }
}

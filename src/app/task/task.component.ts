import { DeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { Task } from './../task.model';
import { EditDialogComponent, } from './../edit-dialog/edit-dialog.component';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() description: string;
  @Input() listId: number;
  @Input() task: Task;
  @Output() notifyDelete = new EventEmitter<Task>();
  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void { }
  deleteTodo(listId: number): void {
    console.log(listId);
  }

  openDeleteDialog(): void {
    const delDialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: this.task
    });
    delDialogRef.afterClosed().subscribe((todoId) => {
      this.notifyDelete.emit(this.task);
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: this.task
    }
    );
  }

}

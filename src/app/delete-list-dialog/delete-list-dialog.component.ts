import { TodoService } from './../todo.service';
import { List } from './../list.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-delete-list-dialog',
  templateUrl: './delete-list-dialog.component.html',
  styleUrls: ['./delete-list-dialog.component.scss']
})
export class DeleteListDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public listId: any,
    private todoService: TodoService
  ) { }

  deleteList(listId): void{
    this.todoService.deleteList(listId).subscribe(
      (res) => {
        console.log(res);
        this.dialogRef.close(listId);
      }
    );
  }
  deleteNo(): void{
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}

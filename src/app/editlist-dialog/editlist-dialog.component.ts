import { TodoService } from './../todo.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from './../list.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-editlist-dialog',
  templateUrl: './editlist-dialog.component.html',
  styleUrls: ['./editlist-dialog.component.scss']
})
export class EditlistDialogComponent implements OnInit {

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditlistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public list: List,
    private todoService: TodoService
    ){ }
  editListForm = this.fb.group(
    {
      title: [this.list.title, Validators.required]
    }
  );
  onSubmit(): void {
    if (this.editListForm.valid) {
      this.list.title = this.editListForm.value.title;
      this.todoService.saveList(this.list).subscribe((list) => {
        this.list = list;
        this.dialogRef.close();
      });
    }
  }
  ngOnInit(): void {
  }

}

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
export class AddlistDialogComponent implements OnInit {

  constructor(private fb: FormBuilder, private todoService: TodoService, private dialogRef: MatDialogRef<AddlistDialogComponent>) { }

  addListForm = this.fb.group(
    {
      title: ["", Validators.required]
    }
  );
  onSubmit(): void{
    if (this.addListForm.valid) {
      const newList = new List(this.addListForm.value.title);
      this.todoService.newList(newList).subscribe((res) => console.log(res));
    }
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}

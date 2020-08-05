import { UniqueTodoListService } from './../unique-todo-list.service';
import { TodoService } from './../todo.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from './../list.model';
import { FormBuilder, Validators, FormGroup, } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-editlist-dialog',
  templateUrl: './editlist-dialog.component.html',
  styleUrls: ['./editlist-dialog.component.scss']
})
export class EditlistDialogComponent implements OnInit {
  editListForm: FormGroup;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditlistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public list: List,
    private todoService: TodoService,
    private uniqueTodoListService: UniqueTodoListService
  ) { }

  get title(): AbstractControl{
    return this.editListForm.get('title');
  }
  
  createForm(): void{
    this.editListForm = this.fb.group(
      {
        title: ['', Validators.required, this.uniqueTodoListService.checkForUniqueList()]
      });
  }
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
    this.createForm();
    this.editListForm.patchValue({
      title: this.list.title
    });
  }

}

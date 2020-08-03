import { TodoService } from './../todo.service';
import { Task } from './../task.model';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder, private todoService: TodoService) { }
  creatForm = this.fb.group(
    {
      description: ["", Validators.required]
    }
  );
  ngOnInit(): void {}
  onSubmit(): void{
    const newTodo: Task = new Task(this.creatForm.value.description, this.data.listId);
    this.todoService.newTodo(newTodo).subscribe(
      (res) => {
        this.dialogRef.close(res);
      }
    );
  }
}

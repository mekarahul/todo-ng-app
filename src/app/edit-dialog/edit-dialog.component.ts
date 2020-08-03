import { TodoService } from '../todo.service';
import { Task } from '../task.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Task,
    public fb: FormBuilder,
    private todoService: TodoService
  ) { }
  editTaskForm = this.fb.group(
    {
      description: [this.task.description, Validators.required]
    }
  );
  onSubmit(): void {
    if (this.editTaskForm.valid) {
      this.task.description = this.editTaskForm.value.description;
      this.todoService.saveTodo(this.task).subscribe( todo => {
        this.task = todo;
      });
    }
    this.dialogRef.close();
  }

ngOnInit(): void {}
}

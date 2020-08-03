import { AddlistDialogComponent } from './../addlist-dialog/addlist-dialog.component';
import { List } from './../list.model';
import { TodoService } from './../todo.service';
import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-listactions',
  templateUrl: './listactions.component.html',
  styleUrls: ['./listactions.component.scss']
})
export class ListactionsComponent implements OnInit {

  constructor(public dialog: MatDialog, private cd: ChangeDetectorRef ) { }
  @Output() notifyAddList = new EventEmitter<any>();
  ngOnInit(): void {}  
  openAddListDialog(): void {
    const addListRef = this.dialog.open(AddlistDialogComponent, {
      width: '250px'
    });

    addListRef.afterClosed().subscribe((res) =>
      {
        this.notifyAddList.emit();
      }
    );
  }

}

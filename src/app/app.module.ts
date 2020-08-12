
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryListComponent } from './category-list/category-list.component';
import { TaskComponent } from './task/task.component';
import { AddIconComponent } from './add-icon/add-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { EditIconComponent } from './edit-icon/edit-icon.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { ListactionsComponent } from './listactions/listactions.component';
import { AddlistDialogComponent } from './addlist-dialog/addlist-dialog.component';
import { EditlistDialogComponent } from './editlist-dialog/editlist-dialog.component';
import { DeleteListDialogComponent } from './delete-list-dialog/delete-list-dialog.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import rootReducer from './store/reducers/todoReducer';
import {initialState} from './store/reducers/todoReducer';
import {IAppState} from './store/reducers/todoReducer';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    TaskComponent,
    AddIconComponent,
    EditIconComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    CreateDialogComponent,
    ListactionsComponent,
    AddlistDialogComponent,
    EditlistDialogComponent,
    DeleteListDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, initialState);
  }
}

import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryListComponent } from './category-list/category-list.component';
import { TaskComponent } from './task/task.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddIconComponent } from './add-icon/add-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { EditIconComponent } from './edit-icon/edit-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    TaskComponent,
    AddIconComponent,
    EditIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

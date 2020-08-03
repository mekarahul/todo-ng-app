import { Task } from './task.model';
import { List } from './list.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getTodoList(): Observable<List[]>{
    return this.http.get<List[]>(environment.listApi)
    .pipe(
      catchError(this.handleError)
    );
  }
  saveTodo(task: Task): Observable<Task> {
    return this.http.put<Task>(environment.todoApi + task.id.toString(), {updateTodo: task})
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteTodo(task: Task): Observable<Task> {
    return this.http.delete<Task>(environment.todoApi + task.id.toString())
      .pipe(
        catchError(this.handleError)
      );
  }
  newTodo(task: Task): Observable<Task> {
    return this.http.post<Task>(environment.todoApi, {newTodo: task})
      .pipe(
        catchError(this.handleError)
      );
  }

  newList(list: List): Observable<List> {
    return this.http.post<List>(environment.listApi, {list})
      .pipe(
        catchError(this.handleError)
      );
  }

  getListById(listId): Observable<List>{
    return this.http.get<List>(environment.listApi + listId.toString());
  }
  saveList(list: List): Observable<List> {
    return this.http.put<List>(environment.listApi + list.id.toString(), {updateList: list})
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteList(listId: number): Observable<List>{
    return this.http.delete<List>(environment.listApi + listId.toString())
      .pipe(
        catchError(this.handleError)
      );
  }
}

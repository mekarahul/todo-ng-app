import { TodoService } from './todo.service';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from "rxjs";
import { map, debounceTime, take, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UniqueTodoListService {

  constructor(private todoService: TodoService) { }

  checkForUniqueList(initial: string = ''): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<{ [key: string]: any } | null>
      | Observable<{ [key: string]: any } | null> => {
      if (control.value === initial) {
        return of(null);
      } else {
        return control.valueChanges.pipe(
          debounceTime(500),
          take(1),
          switchMap(_ =>
            this.todoService
              .checkUniqueList(control.value)
              .pipe(
                map((duplicateTitle: boolean) =>
                  {
                   if(duplicateTitle){
                     return {validateTitle: true};
                   }
                   return null;
                  }
                )
              )
          )
        );
      }
    };
  }
}

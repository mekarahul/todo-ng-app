import { ADD_TODO, LOAD_TODOS, DELETE_TODO } from "../constants/action-types";

export function addTodoToList(payload){
  return { type: ADD_TODO, payload };
}
export function LoadTodoList(payload){
    return { type: LOAD_TODOS, payload};
}

export function deleteTodo(payload){
  return  {type: DELETE_TODO, payload};
}
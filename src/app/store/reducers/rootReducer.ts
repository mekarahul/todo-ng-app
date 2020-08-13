import { combineReducers } from "redux";
import todoReducer from './todoReducer';
import listReducer from './listReducer';
export interface IAppState{}
export const initialState = {};
const rootReducer = combineReducers(
    {
        todos: todoReducer,
        list: listReducer
    }
  );
export default rootReducer;

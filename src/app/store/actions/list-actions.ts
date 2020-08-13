import { ADD_LIST, LOAD_LIST, DELETE_LIST } from "../constants/action-types";

export function loadList(payload){
    return { type: LOAD_LIST, payload};
}

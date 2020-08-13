
import { ADD_LIST, LOAD_LIST, DELETE_LIST, EDIT_LIST } from '../constants/action-types';

export function loadList(payload) {
    return { type: LOAD_LIST, payload };
}
export function addList(payload) {
    return { type: ADD_LIST, payload };
}
export function deleteList(payload) {
    return { type: DELETE_LIST, payload };
}
export function editList(payload) {
    return { type: EDIT_LIST, payload }
}
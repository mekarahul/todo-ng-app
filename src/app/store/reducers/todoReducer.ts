import { ADD_TODO, LOAD_TODOS, DELETE_TODO } from '../constants/action-types';
import { map, arrayOf } from 'lodash';
import _ from 'lodash';

export const todos = {
    listId1: {
        todoId1: {
            id: 1,
            description: 'meditation',
            listId: 1
        },
        todoId2: {
            id: 2,
            description: 'yogo',
            listId: 1
        }
    },
    listId2: {
        todoId3: {
            id: 3,
            description: 'Buy Car',
            listId: 2
        },
        todoId4: {
            id: 4,
            description: 'Teach Angular',
            listId: 2
        }
    },
    listId3: {
        todoId5: {
            id: 5,
            description: 'Mean Stack',
            listId: 3
        },
        todoId4: {
            id: 6,
            description: 'change job',
            listId: 3
        },
    },
    allTodoIds: [1, 2, 3, 4, 5, 6]
}

export default function todoReducer(state = todos, action) {
    switch (action.type) {
        case ADD_TODO:
            console.log("add todo called", action.payload);
            if (state['listId' + action.payload.listId] !== undefined) {
                return {
                    ...state,
                    ['listId' + action.payload.listId]: {
                        ...state['listId' + action.payload.listId], ['todoId' + action.payload.id]: action.payload
                    },
                    allTodoIds: [...state.allTodoIds].concat(action.payload.id),
                }
            } else {
                return {
                    ...state,
                    ['listId' + action.payload.listId]: {
                        ...state['listId' + action.payload.listId], ['todoId' + action.payload.id]: action.payload,
                    },
                    allTodoIds: state.allTodoIds.concat(action.payload.id),
                }
            }
        case DELETE_TODO:
            return {
                ...state,
                ['listId' + action.payload.value.listId]: {
                    ...deletePropretyObj(state['listId' + action.payload.value.listId], action.payload.key),
                }
            }
        case LOAD_TODOS:
            return {
                ...state, ...loadDataToTodos(action.payload),
            }
        default:
            return state;
    }
}

function loadDataToTodos(data: any): object {
    let topWrapper = {}
    let allTodoIds = [];
    data.map(list => {
        const prefix = 'listId';
        topWrapper['listId' + list.id] = {};
        list.todos.map(todo => {
            topWrapper['listId' + list.id]['todoId' + todo.id] = todo;
            allTodoIds.push(todo.id);
        });
    });
    topWrapper['allTodoIds'] = allTodoIds;
    console.log("topWrapper", topWrapper);
    return topWrapper;
}
function deletePropretyObj(obj, ele) {
    let newObj = obj;
    delete newObj[ele];
    return newObj;
}



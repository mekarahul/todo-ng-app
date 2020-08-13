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
            const newTodo = {
                id: todos.allTodoIds[todos.allTodoIds.length - 1] + 1,
                description: action.payload.description,
                listId: action.payload.listId
            }
            if (state['listId' + newTodo.listId] !== undefined) {
                return {
                    ...state,
                    ['listId' + newTodo.listId]: {
                        ...state['listId' + newTodo.listId], ['todoId' + newTodo.id]: newTodo
                    },
                    allTodoIds: {
                        ...[state.allTodoIds], ...[newTodo.id]
                    }
                }
            }
        case DELETE_TODO:
            console.log("delete wala",action);
            return {
                ...state,
                ['listId' + action.payload.value.listId]: {
                    ...deletePropretyObj(state['listId' + action.payload.value.listId], action.payload.key),
                }
            }
        case LOAD_TODOS:
            console.log("load_list", action);
            return {
                ...state, ...loadDataToTodos(action.payload),
            }
        default:
            return state;
    }
}

function loadDataToTodos(data: any): object {
    let topWrapper = {}
    data.map(list => {
        const prefix = 'listId';
        topWrapper['listId' + list.id] = {};
        list.todos.map(todo => {
            topWrapper['listId' + list.id]['todoId' + todo.id] = todo;
        });
    });
    return topWrapper;
}
function deletePropretyObj(obj, ele) {
    let newObj = obj;
    delete newObj[ele];
    return newObj;
}



import { ADD_TODO, LOAD_TODOS, DELETE_TODO } from '../constants/action-types';

import _ from 'lodash';
export interface IAppState {
    entities: {}
}
export const initialState = {
    entities: {
        todos: {
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
                }
            },
            allTodoIds: [1, 2, 3, 4, 5, 6]
        },
        list: {
            listId1: {
                id: 1,
                title: 'to do'
            },
            listId2: {
                id: 2,
                title: 'In Progress'
            },
            listId3: {
                id: 3,
                title: 'Done'
            }
        }

    }
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: state.entities.todos.allTodoIds[state.entities.todos.allTodoIds.length - 1] + 1,
                description: action.payload.description,
                listId: action.payload.listId
            }
            if (state.entities.todos['listId' + newTodo.listId] !== undefined) {
                console.log("newTodo", newTodo);
                return {
                    ...state,
                    entities: {
                        ...state.entities,
                        todos: {
                            ...state.entities.todos,
                            ['listId' + newTodo.listId]: {
                                ...state.entities.todos['listId' + newTodo.listId], ...state.entities.todos['listId' + newTodo.listId], ['todoId' + newTodo.id]: newTodo
                            }
                        }
                    }

                }
            }
            case DELETE_TODO:
                deletePropretyObj(state.entities.todos['listId' + action.payload.value.listId], state.entities.todos['listId' + action.payload.value.listId]['todoId' + action.payload.value.id]);
                return{
                  ...state,
                  entities:{
                      ...state.entities,
                      todos: {
                        ...state.entities.todos,
                        ['listId' + action.payload.value.listId]:{
                            //...state.entities.todos['listId' + action.payload.value.listId],
                            ...deletePropretyObj(state.entities.todos['listId' + action.payload.value.listId], 'todoId'+action.payload.value.id),
                          }
                      }
                  }
                }
        default:
            return state;
    }
}

function loadDataToSlice(data: any) {
    const obj: any = {};
    obj.allIds = [];
    obj.byId = {};
    data.forEach(element => {
        obj.byId[element.id] = element;
        obj.allIds.push(element.id);
    });
    return obj;
}
function deletePropretyObj(obj, ele){
    let newObj = obj;
    delete newObj[ele];
    return newObj;
}

export default rootReducer;

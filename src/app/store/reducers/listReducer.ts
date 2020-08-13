import { LOAD_LIST, ADD_LIST, DELETE_LIST, EDIT_LIST } from './../constants/action-types';

export const list = {
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
    },
    allListIds:[1, 2, 3, 4 ]
}
export default function listReducer(state = list, action) {
    switch (action.type){
        case LOAD_LIST:
        return {
            ...transformloadList(action.payload),
        }
        case ADD_LIST:
        return {
            ...state, ...addListTransform(action.payload),
        }
        case DELETE_LIST:
        return {
            ...deleteListItem(state, action.payload),
        }
        case EDIT_LIST:
            console.log("editlist",action);
            return {
                ...state, ...addListTransform(action.payload),
            }
        default:
            return state;
    }
}

function transformloadList(data): object{
    const outerList = {}
    data.map(item => {
        outerList['listId' + item.id] = item;
    });
    return outerList;
}
function addListTransform(obj): object{
    const outerObj = {}
    outerObj['listId'+obj.id] = obj;
    return outerObj;
}

function deleteListItem(list, eleId): object{
    delete list['listId' + eleId]
    return list;
}
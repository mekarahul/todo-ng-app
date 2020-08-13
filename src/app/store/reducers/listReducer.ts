import {LOAD_LIST} from './../constants/action-types';

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
    }
}
export default function listReducer(state = list, action) {
    switch(action.type){
        case LOAD_LIST:
        return {
            ...transformloadList(action.payload),
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
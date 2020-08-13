import { schema } from 'normalizr';

import { Task } from './task.model';

export class List {
    id: number;
    title: string;
    Task: [];
    constructor(title){
        this.title = title;
    }
}

export const listSchema = new schema.Entity('List');

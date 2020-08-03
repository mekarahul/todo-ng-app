import { Task } from './task.model';
export class List {
    id: number;
    title: string;
    Task: [];
    constructor(title){
        this.title = title;
    }
}

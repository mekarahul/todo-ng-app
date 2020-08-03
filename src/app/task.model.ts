export class Task {
    id: number;
    description: string;
    listId: number;

    constructor(description: string, listId: number){
        this.description = description;
        this.listId = listId;
    }
}

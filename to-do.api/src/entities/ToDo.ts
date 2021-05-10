export interface IToDo{
    description: string;
    done: boolean;
}

export interface IToDoList{
    id: string;
    coColor: string;
    toDoList:Array<IToDo>;
}

class ToDo implements IToDo {
    public description: string;
    public done: boolean;

    constructor(descriptionOrToDo: string | IToDo, done?: boolean) {
        if (typeof descriptionOrToDo === 'string') {
            this.description = descriptionOrToDo;
            this.done = done || false;
        } else {
            this.description = descriptionOrToDo.description;
            this.done = descriptionOrToDo.done;
        }
    }
}

class ToDoList implements IToDoList{
    public id: string;
    public coColor: string;
    public toDoList: Array<IToDo>;

    constructor(idOrToDoList: string | IToDoList, coColor: string, toDoList: Array<IToDo>){
        if(typeof idOrToDoList === 'string'){
            this.id = idOrToDoList;
            this.coColor = coColor;
            this.toDoList = toDoList;
        }else{
            this.id = idOrToDoList.id;
            this.coColor = idOrToDoList.coColor;
            this.toDoList = idOrToDoList.toDoList;
        }
    }
}

export default {ToDo, ToDoList};
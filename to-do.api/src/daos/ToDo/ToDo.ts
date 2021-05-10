import {IToDoList,IToDo} from '@entities/ToDo';
import schema from './ToDo.schema'
import mongoose from 'mongoose';

export interface IToDoDao {
    getOne: (id : string) => Promise<IToDoList | null>;
    getAll: () => Promise<IToDoList[]>;
    add: (todo: IToDoList) => Promise<void>;
    update: (todo: IToDoList) => Promise<void>;
    delete: (id: number) => Promise<void>;
    addToDo: (toDo: IToDo, id: string) => Promise<void>;
    updateToDo: (toDo: IToDo, id: string) => Promise<void>;
    deleteToDo: (toDo: IToDo, id: string) => Promise<void>;
}

class ToDoDao implements IToDoDao {


    ToDo = mongoose.model('ToDo',schema);

    /**
     * @param id
     */
    public getOne(id: string): Promise<IToDoList | null> {
        // TODO
        return this.ToDo.findById(id);
    }


    /**
     *
     */
    public getAll(): Promise<IToDoList[]> {
         // TODO
        return this.ToDo.find({});
    }


    /**
     *
     * @param ToDo
     */
    public async add(todo: IToDoList): Promise<void> {
         // TODO
        const newToDo = new this.ToDo();
        newToDo.coColor = todo.coColor;
        newToDo.toDoList = todo.toDoList;
        return newToDo.save();
    }


    /**
     *
     * @param ToDo
     */
    public async update(toDo: IToDoList): Promise<void> {
        return this.ToDo.updateOne({_id: toDo.id}, {$set:{coColor:toDo.coColor,toDoList:toDo.toDoList}});
    }


    /**
     *
     * @param id
     */
    public async delete(id: number): Promise<void> {
        return await this.ToDo.deleteOne({_id:id});
    }

    public async addToDo(toDo: IToDo, id: string): Promise<void> {
        return await this.ToDo.updateOne({_id:id},{$push:{toDoList:{description:toDo?.description,done:toDo?.done}}});        
    }

    public async updateToDo(toDo: IToDo, id: string): Promise<void> {
        return await this.ToDo.updateOne({_id:id},{$set:{"toDoList.$[element]":{description:toDo?.description,done:toDo?.done}}},{arrayFilters:[{"element.description":toDo.description}]});        
    }
    public async deleteToDo(toDo: IToDo, id: string): Promise<void> {
        return await this.ToDo.updateOne({_id:id},{$pull:{toDoList:{description:toDo.description,done:toDo.done}}});        
    }
}

export default ToDoDao;
import { Request } from 'express';
import { IToDoList } from '@entities/ToDo';


export const paramMissingError = 'One or more of the required parameters was missing.';

export interface IRequest extends Request {
    body: {
        toDo: IToDoList;
    }
} 

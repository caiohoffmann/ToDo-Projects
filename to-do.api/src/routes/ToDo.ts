import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import ToDoDao from '@daos/ToDo/ToDo';
import { paramMissingError, IRequest } from '@shared/constants';
import { IToDoList, IToDo } from '@entities/ToDo';

const router = Router();
const toDoDao = new ToDoDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

interface toDoRequest{
    id:string;
    toDo:IToDo;
}


router.get('/', async (req: Request, res: Response) => {
    const todos = await toDoDao.getAll();
    return res.status(OK).json({todos});
});


router.get('/:id', async (req:Request, res:Response) => {
    const todo = await toDoDao.getOne(req.params.id);
    return res.status(OK).json({todo});
});

router.post('/', async (req: Request<any,any,IToDoList>, res: Response) => {
    const todo = req.body;
    if(!todo){
        return res.status(BAD_REQUEST).json({
            error: paramMissingError
        });
    }
    await toDoDao.add(todo);
    return res.status(CREATED).end();
});

router.put('/', async (req: Request<any,any,IToDoList>, res: Response) => {
    const todo = req.body;
    if(!todo){
        return res.status(BAD_REQUEST).json({
            error: paramMissingError
        });
    }
    await toDoDao.update(todo);
    return res.status(CREATED).end();
});

router.post('/addToDo', async (req: Request<any,any,toDoRequest>, res: Response) => {
    const body = req.body;
    if(!body || !body.id || !body.toDo){
        return res.status(BAD_REQUEST).json({
            error: paramMissingError
        });
    }
    try{
        await toDoDao.addToDo(body.toDo, body.id);
    }catch(ex){
        console.log(ex);
    }
    return res.status(CREATED).end()
});

router.put('/updateToDo' , async (req: Request<any,any,toDoRequest>, res: Response) => {
    const body = req.body;
    if(!body || !body.id || !body.toDo){
        return res.status(BAD_REQUEST).json({
            error: paramMissingError
        });
    }
    try{
        await toDoDao.updateToDo(body.toDo, body.id);
    }catch(ex){
        console.log(ex);
    }
    return res.status(CREATED).end()
});

router.delete('/', async (req: Request, res: Response) => {
    const todo = req.body;
    if(!todo){
        return res.status(BAD_REQUEST).json({
            error: paramMissingError
        });
    }
    await toDoDao.delete(todo);
    return res.status(OK).end();
});

router.delete('/deleteToDo', async (req: Request<any,any,toDoRequest>, res: Response) => {
    const body = req.body;
    if(!body || !body.id){
        return res.status(BAD_REQUEST).json({
            error: paramMissingError
        });
    }
    await toDoDao.deleteToDo(body.toDo,body.id);
    return res.status(OK).end();
});

export default router;
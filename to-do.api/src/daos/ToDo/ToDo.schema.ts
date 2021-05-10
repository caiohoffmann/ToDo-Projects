import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

interface ToDoTask{
  description: String,
  done: Boolean
}

const ToDo = new Schema({
  id: ObjectId,
  coColor: String,
  toDoList:Array<ToDoTask>()
});

export default ToDo;
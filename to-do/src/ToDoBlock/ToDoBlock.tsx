import MenuBlock from "../MenuBlock/MenuBlock";
import Task from "../Task/Task";
import Block from "../Domain/Block"
import React, {useState, FunctionComponent} from "react";
import CSS from "csstype";

const ToDoBlock:FunctionComponent<Block> = ((props) => {
    const [backgroundColor,setBackgroundColor] = useState(props.coTaskBlockColor);
        
    const toDoBlockCSS: CSS.Properties = {
        backgroundColor:backgroundColor
    };

    const onColorChange = (color:string) => {
        setBackgroundColor(color);
    };

    return <>
         (
        <div className="col s12 m6">
            <div className="card" style={toDoBlockCSS}>
                <div className="card-content white-text">
                    <div className="input-field">
                        <input id="new-taskblock-${this.state.idTaskBlock}" type="text" className="validate" data-type="new-taskblock"  /> 
                        <label>New Task Block</label>
                        <i className="material-icons prefix posfix" >add_circle</i>
                    </div>
                    <MenuBlock  coColor="backgroundColor" onColorChange={setBackgroundColor}/>
                    <span className="card-title">{props.deTaskBlock}</span>
                    <ul>
                        <Task deTask="My new task" idToDo={0}/>
                        <li data-type="new-task-li">
                            <div className="input-field">
                                <input type="text" className="validate" />
                                <label>New Task</label>
                                <i className="material-icons prefix posfix" >add_circle</i>
                            </div>
                        </li>                        
                    </ul>
                </div>
            </div>
        </div>
        )
    </>
});

export default ToDoBlock;
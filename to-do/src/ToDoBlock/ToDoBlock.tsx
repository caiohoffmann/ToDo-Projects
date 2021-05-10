import MenuBlock from "../MenuBlock/MenuBlock";
import Task from "../Task/Task";
import Block from "../Domain/Block"
import * as React from "react";
import CSS from "csstype";

class ToDoBlock extends React.Component<Block,Block>{
    constructor(props : Block){
        super(props);
        this.state = {...props};
        this.toDoBlockCSS = {
            backgroundColor : this.state.coTaskBlockColor
        }
    }
        
    toDoBlockCSS: CSS.Properties;

    render(){
        return (
        <div className="col s12 m6">
            <div className="card" style={this.toDoBlockCSS}>
                <div className="card-content white-text">
                    <div className="input-field">
                        <input id="new-taskblock-${this.state.idTaskBlock}" type="text" className="validate" data-type="new-taskblock"  /> 
                        <label>New Task Block</label>
                        <i className="material-icons prefix posfix" >add_circle</i>
                    </div>
                
                    <div className="icon-menu">
                        <a className="btn-floating red">
                            <i className="large material-icons">menu</i>
                        </a>
                        <MenuBlock  coColor="#333"/>
                    </div>
                    <span className="card-title">{this.state.deTaskBlock}</span>
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
    }
}

export default ToDoBlock;
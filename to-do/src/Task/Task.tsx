import * as React from "react";
import ToDo from "../Domain/ToDo"

class Task extends React.Component<ToDo, ToDo>{
    constructor(props : ToDo){
        super(props);
        this.state = {...props};
    }

    render() {
        return (
            <li>
                <div className="task-container">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="white-text">
                            <input type="checkbox" data-type="task-check" />
                            <span>{this.state.deTask}</span>
                        </label>
                    </div>
                </div>
            </li>
        );
    }
}

export default Task;
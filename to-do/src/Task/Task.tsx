import React, {useState, FunctionComponent} from "react";
import ToDo from "../Domain/ToDo"

const Task:FunctionComponent<ToDo> = ((props) => {

    return <>
        <li>
            <div className="task-container">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label className="white-text">
                        <input type="checkbox" data-type="task-check" />
                        <span>{props.deTask}</span>
                    </label>
                </div>
            </div>
        </li>
    </>
});

export default Task;
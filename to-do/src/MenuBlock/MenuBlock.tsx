import CSS from 'csstype';
import * as React from "react";
import Menu from "../Domain/Menu"

const colorPickerStyle: CSS.Properties = {
    position:'absolute',
    left:'-9999px',
    top:'-9999px'
};

class MenuBlock extends React.Component<Menu,Menu>{
    constructor(props : Menu){
        super(props);
    }

    

    render(){
        return (
            <ul>
                <li className="brush-option" data-color="#546e7a" ><a className="btn-floating blue"><i className="material-icons">brush</i></a></li>
                <li className="user-option"><a className="btn-floating yellow darken-1"><i className="material-icons">account_box</i></a></li>
                <li className="remove-block"><a className="btn-floating red darken-1" ><i className="material-icons">clear</i></a></li>
                <li className="color-picker"><input type="color" style={colorPickerStyle} value="color"/></li>
            </ul>
        )
    }
}

export default MenuBlock;
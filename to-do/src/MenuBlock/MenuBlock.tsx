import CSS from 'csstype';
import React, {useState, FunctionComponent} from "react";
import Menu from '../Domain/Menu';



const MenuBlock:FunctionComponent<Menu> = ((initial) => {
    const [isHovered,setIsHovered] = useState(false);
    const [color,setColor] : [any,any] = useState(initial.coColor);
    const colorPickerStyle: CSS.Properties = {
        position:'absolute',
        left:'-9999px',
        top:'-9999px'
    };
    const setNewBackGroud = initial.onColorChange;

    return <>
        <div className="icon-menu" onMouseOut={() => setIsHovered(false)}>
            <a className="btn-floating red" onMouseOver={() => setIsHovered(true)}>
                <i className="large material-icons">menu</i>
            </a>
            <ul >
                { isHovered ? 
                    <>
                    <li className="brush-option" data-color="#546e7a" ><a className="btn-floating blue"><i className="material-icons">brush</i></a></li>
                    <li className="user-option"><a className="btn-floating yellow darken-1"><i className="material-icons">account_box</i></a></li>
                    <li className="remove-block"><a className="btn-floating red darken-1" ><i className="material-icons">clear</i></a></li>
                    <li className="color-picker"><input type="color" style={colorPickerStyle} value={color} onChange={setColor}/></li>
                    </>
                    : null
                }
            </ul>
        </div>
    </>
});

export default MenuBlock;
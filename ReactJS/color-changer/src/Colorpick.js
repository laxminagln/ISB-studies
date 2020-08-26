import React from 'react';
import './Background.css';

const Colorpick = (props) => {
    return(
        <div className="picker_box">
            <span>Pick a Color</span>
            <input type="color" onChange={props.onChange} />
            <span>{props.currentColor}</span>
        </div>
    );
};

export default Colorpick;
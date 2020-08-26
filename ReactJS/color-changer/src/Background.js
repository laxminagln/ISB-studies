import React from 'react';
import './Background.css';
import Colorpick from './Colorpick';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "white"
        };
    }
    
    onColorChange = (e) => {
        this.setState({
            color: e.target.value
        });
    };

    render = () => {
        return(
            <div className="back_container" style={{ backgroundColor: this.state.color}}>
                <Colorpick
                    onChange = {this.onColorChange}
                    currentColor = {this.state.color}
                />
            </div>
        )
    }
}
export default Background;
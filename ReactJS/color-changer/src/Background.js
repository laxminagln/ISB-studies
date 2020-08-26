import React from 'react';
import './Background.css';
import Colorpick from './Colorpick';

class Background extends React.Component {
    render = () => {
        return(
            <div className="back_container" style={{ backgroundColor = this.state.color}}>
                <Colorpick
                    onChange = {this.onColorChange}
                    currentColor = {this.state.color}
                />
            </div>
        )
    }
}
export default Background;
import React from 'react';
import './Background.css';

class Background extends React.Component {
    render = () => {
        return(
            <div className="back_container">
                <div className="color_box">
                    <h4>Pick a Color</h4>
                    <input type="color" />
                    <p>Mycurrent value</p>
                </div>
            </div>
        )
    }
}
export default Background;
import React from "react";
import "./Wall.css";
 
const Brick = (props) => {
 return (
   <div onClick={() => props.onClick(props.number)} className="brick">
     <span>{props.number}</span>
   </div>
 );
};
 
export default Brick;
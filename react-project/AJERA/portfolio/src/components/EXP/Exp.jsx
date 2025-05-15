import React from "react";
import "./Exp.css"

const Exp = ({number,title,style}) => {
  return (
    <div className="exp-box-content" style ={{...style}} >
        <h2>{number}</h2>
        <p>{title}</p>
    </div>
    );
};

export default Exp;

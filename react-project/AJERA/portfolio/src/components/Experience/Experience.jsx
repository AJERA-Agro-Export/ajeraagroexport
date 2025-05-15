import React from "react";
import { Element } from "react-scroll";
import Exp from "../EXP/Exp.jsx"
import "./Experience.css"

const Experience = () => {
  return (
   <Element className="exp" classID="experi">
    <h1>Experience</h1>
    <div className="exp-box">
      {/* <div className="exp-box-center"> */}
        <Exp number ="+ 10" title=" clients"/>
        <Exp number ="+ 10" title=" clients" style={{backgroundcolor:"blue"}}/>
        <Exp number ="+ 10" title=" clients"/>
        <Exp number ="+ 10" title=" clients"/>
      {/* </div> */}
    </div>
   </Element>

  );
};

export default Experience;

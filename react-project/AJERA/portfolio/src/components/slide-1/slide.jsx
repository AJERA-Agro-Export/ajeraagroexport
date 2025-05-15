import React from "react";
import { Element } from "react-scroll";
import "./slide.css"
import Sl_1 from '../sl-1/Sl-1.jsx'
import Sl_2 from "../Sl-2/Sl_2.jsx";



const Slide = () =>{
    return (
    <Element name="about" className="slide1">
        <Sl_2/>
       <Sl_1/>
    </Element>
)}

export default Slide;

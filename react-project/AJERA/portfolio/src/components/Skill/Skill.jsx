import React from "react";
import './Skill.css'
import { Element } from "react-scroll";
import img from "../../image/lap.jpg";
import { LinearProgress } from "@mui/material";

function Skill() {
  return (
    <Element className="skill" id="skill-slide">
        <div className="skill-left">
            <img src={img} alt="working image" />
        </div>
        <div className="skill-left">
            <h2>SKILL SET</h2>
            <div className="skill-left-1">
                <h4>React</h4>
                <div className="sl-l-c-1" id="line">
                    <LinearProgress variant="determinate"  value={60}></LinearProgress>
                </div>
            </div>
            <div className="skill-left-1">
                <h4>JavaScript</h4>
                <div className="sl-l-c-2" id="line">
                    <LinearProgress variant="determinate"  value={70}></LinearProgress>
                </div>
            </div>
            <div className="skill-left-1">
                <h4>HTML</h4>
                <div className="sl-l-c-3" id="line">
                    <LinearProgress variant="determinate"  value={80}></LinearProgress>
                </div>
            </div>
            <div className="skill-left-1">
                <h4>CSS</h4>
                <div className="sl-l-c-4" id="line">
                    <LinearProgress variant="determinate"  value={80}></LinearProgress>
                </div>
            </div>
            <div className="skill-left-1">
                <h4>Node.JS</h4>
                <div className="sl-l-c-5" id="line">
                    <LinearProgress variant="determinate"  value={50}></LinearProgress>
                </div>
            </div>
            <div className="skill-left-1">
                <h4>MongoDB</h4>
                <div className="sl-l-c-6" id="line">
                    <LinearProgress variant="determinate"  value={40}></LinearProgress>
                </div>
            </div>
            <div className="skill-left-1">
                <h4>AWS</h4>
                <div className="sl-l-c-7" id="line">
                    <LinearProgress variant="determinate"  value={40}></LinearProgress>
                </div>
            </div>
        </div>
    </Element>
    
  );
}

export default Skill;

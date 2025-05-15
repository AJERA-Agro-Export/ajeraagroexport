import React from "react";
import { Element } from "react-scroll";
import Projects from "../Pro-detail/Pro-detail.jsx"
import "./Pro-content.css"
import lapImage from "../../image/lap.jpg"


function Pro_content() {

const project = [
    {
        img:lapImage,
        title : " project ",
        cont : " this is a ",
        link : "www.google.com"
    },
    {
        img:lapImage,
        title : " project ",
        cont : " this is a ",
        link : "www.google.com"
    },
    {
        img:lapImage,
        title : " project ",
        cont : " this is a ",
        link : "www.google.com"
    },
    {
        img:lapImage,
        title : " project ",
        cont : " this is a ",
        link : "www.google.com"
    },
    // {
    //     img:" ../../image/lap.jpg ",
    //     title : " project ",
    //     cont : " this is a ",
    //     link : "www.google.com"
    // },

]

  return (

    <Element className="pro " id="project">
        <div className="pro-title">
           <h1>PROJECT</h1>
          <p>this project done by me</p>
        </div>

        <div className="pro-box">
             {/* <Projects/> */}  

             {project.map((project,index)=>{

                   return(
                         <Projects 
                          key={index}
                          img={project.img}
                          title={project.title}
                          cont = {project.cont}
                          link ={project.link}
                         />
                         
                   )  
             })}
             
             {/* <Projects />   */}
        </div>
 
    </Element>

  );
}

export default Pro_content;

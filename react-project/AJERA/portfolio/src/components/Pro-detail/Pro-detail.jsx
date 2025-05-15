import React,{ useState} from "react";
import "./Pro-detail.css"

const Projects = ({img,title,cont,link}) => {

const [show,setShow] = useState(false)
  return (
     <a href ={link}>
         <div className="pojects_detail"  onMouseEnter={ ()=> setShow(true)} onMouseLeave={ ()=> setShow(false)}> 

        { show ? 
        (
           <div>
            <h3>{title}</h3>
            <p>{cont}</p>
           </div>
        ) : ( <img className="pro-img" src={img} alt="project image"/>)
        }
        </div>
        </a>
  );

};

export default Projects;

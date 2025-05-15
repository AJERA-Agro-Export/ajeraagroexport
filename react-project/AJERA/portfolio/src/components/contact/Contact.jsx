import React from "react";
import { Element } from "react-scroll";
import {LinkedIn,Twitter,Facebook,Instagram  } from "@mui/icons-material";
// import LinkedIn from '@mui/icons-material/LinkedIn';
import { IconButton } from "@mui/material";
import "./Contact.css"


const Contact = () => {
  return (
      <Element className="contact" classID="con">

          <div className="con-1">
            <h1>Contact Us</h1>
            <div className="con-2">
                <p>
                    Email : <span>ajithyavarman@gmail.com</span>
                </p>
                <p>
                    Github Username : <span>AjithyaRamavarman</span>
                </p>
                <div className="con-2-1">
                      
                      <a href="">
                        <IconButton>
                            <LinkedIn/>
                        </IconButton>
                      </a>
                      <a href="">
                        <IconButton>
                            <Twitter/>
                        </IconButton>
                      </a>
                      <a href="">
                        <IconButton>
                            <Facebook/>
                        </IconButton>
                      </a>
                      <a href="">
                        <IconButton>
                            <Instagram/>
                        </IconButton>
                      </a>

                </div>
            </div>
          </div>

      </Element>
  );
};

export default Contact;

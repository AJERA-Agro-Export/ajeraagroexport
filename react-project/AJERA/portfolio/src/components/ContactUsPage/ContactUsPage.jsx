import React from 'react';
import "./ContactUsPage.css";

const ContactForm = () => {

   const word ="  Feel free to message — AJERA Group is here to assist! ";
  return (
    <div className="form-container">
      <div className="f-left">
        <h2>❝   Any Queries? </h2>
        <h3> {word}    ❞</h3>
      </div>
      <div className="f-right">
      <form 
        action="https://formsubmit.co/ajeraagroexport@gmail.com" 
        method="POST"
      >
        <h2>Contact Us</h2>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="email" name="confirmEmail" placeholder="Confirm Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        
        <button type="submit">Send Message</button>
       
      </form>
      </div>
    </div>
  );
};

export default ContactForm;

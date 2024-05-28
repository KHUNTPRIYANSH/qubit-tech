import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';import Spline from '@splinetool/react-spline';

import "../styles/Contact.css"
const Contact = () => {const form = useRef();
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    
    // Send email using EmailJS
  emailjs
      .sendForm('service_13micoq', 'template_6yn1h4c', form.current,'lae7MtW3ydU2SeTN-')
      .then(
        () => {
            alert("Successfully Sent mail !")
            console.log('SUCCESS!');
        },
        (error) => {
            alert("Failed To Sent mail !")
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
     <div className="con-sec">
<div className="con-left">

      <div className="t-title">Contact Us</div>
      <div className="message">
        {/* Form for contacting */}
        <form onSubmit={handleSubmit} ref={form} className="contactus">
          <div className="input">
            <label className="icon">
              <i className="fa fa-user-o" aria-hidden="true"></i>
            </label>
            <input type="text" name="user_name" className="name" placeholder="Name" required />
          </div>
          <div className="input">
            <label className="icon">@</label>
            <input type="email" name="user_email" className="email" placeholder="Email" required />
          </div>
          <div className="inmsg">
            <label className="icon msicon">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="msg"
              placeholder="Message"
              required
            />
          </div>
          <div className="forbtn">
            <button type="submit" className="btn cc-btn">Send Message</button>
          </div>
        </form>
      </div>
</div>
<div className="con-right">
      <Spline scene="https://prod.spline.design/o1PV48ciD4oqd9rZ/scene.splinecode" />
</div>
     </div>
    </>
  );
};

export default Contact;

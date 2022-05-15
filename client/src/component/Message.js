import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import './message.css';
 const Message = ({closeModal}) => {
  const [result, setResult] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zjl90jd', 'template_6l8c8b9', form.current, 'R4hpM-oPlIXcXwpf3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setResult(true)
      e.target.reset()
      setTimeout(()=>setResult(false),5000)
  };
 return(

  
  <div className='contactForm'>
<form ref={form} onSubmit={sendEmail}>
<h2> Send message </h2>
<button onClick={() => closeModal(false)}>X</button>
      <div className='inputBox'>
      <input type="text" name="" required="required" />
      <span> Full Name</span>
      </div>
      <div className='inputBox'>
      <input type="email" name=""  required="required"  />
      <span> Email </span>
      </div>
      <div className='inputBox'>
      <textarea name="message" />
      <span> Type your message...</span>
</div>
      <div className='inputBox'>
      <input type="submit" value="Send"  required="required"  />
     { result ? <h1>Message envoyé</h1> : null}
  
     </div>
    </form>
</div>
    
    
  );
};
export default Message
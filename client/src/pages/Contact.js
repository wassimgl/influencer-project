import React,{ useEffect, useRef ,useState} from 'react'
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './contact.css';
const Contact = () => {
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
    useEffect(()=>{
      Aos.init({duration: 2500});
        },[]  );

  return (
    <section className='contact'>
<div className='content'>
<h2>CONTACTER NOUS </h2>
<p>Pour toutes informations, merci de nous envoyer un mail via le formulaire ci-dessous.</p>
</div>
<div className='containeer'>
<div className='contactInfo'>
<div data-aos="flip-left" className='box'>
<div className='icon'> <ion-icon name="location-sharp"></ion-icon>  </div>
  <div className='text'>
    <h3>Address</h3>
    <p>13.Rue Khaled Ibn Walid,<br/> Sousse,Tunisia, <br/> 4060 </p>
 
</div>
</div>

  <div  data-aos="flip-left"  className='box'>
<div className='icon'> <ion-icon name="mail"></ion-icon> </div>
  <div className='text'>
    <h3>Email</h3>
    <p> influencer@gmail.com </p>
  </div>
</div>
  <div data-aos="flip-left" className='box'>
<div className='icon'> <ion-icon name="call"></ion-icon>  </div>
  <div className='text'>
    <h3>Phone</h3>
    <p>+21652718955 </p>
  </div>
</div>
</div>
<div className='contactForm'>
<form ref={form} onSubmit={sendEmail}>
<h2> Send message </h2>
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

</div>




  
    
    </section>
  )
}

export default Contact;
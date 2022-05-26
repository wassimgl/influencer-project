import React,{ useEffect, useRef ,useState} from 'react'
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './msg.css';
import { Link } from 'react-router-dom';
const Message = () => {
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
    <section className='cott'>
<div className='content'>
<h2>Notre influencers se tiennent à votre disposition pour vous aider.</h2>
</div>
<p>Une fois que vous avez recherché et audité les influenceurs, vous pouvez organiser vos contacts en quelques clics.Vous avez besoin de plus d’informations à propos de notre platforme ?  vous pouvez contacter l'influenceur directement en lui envoyant un message en utilisant ce formulaire e-mail.</p>

<div className='containeer'>

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
<div className='come'>
      <div className='inputBox'>
      <input type="submit" value="Send"  required="required"  />
     { result ? <h1>Message envoyé</h1> : null}
     </div>
     <div className='inputBox'>
      <Link to='/influencer'><input type="submit" value="Influencer"  required="required"  /></Link>
     
     </div>
     </div>
    </form>
</div>

</div>




  
    
    </section>
  )
}

export default Message;
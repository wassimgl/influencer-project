import React,{useEffect} from 'react';
import './team.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Team = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
      },[]  );
  return (
      <section className='team'>
    <div className='conta'>
    <div className='desc'>
    <h1>Notre équipe carbure aux défis et aux communications marketing. <br/> Elle est aussi mordue de stratégie que de création et de média. Elle ne fait pas de jaloux.</h1>
    </div>
    <div className='cardWarrper'>
        <div data-aos="fade-right" className='carddd'>

        <img className='cardImg' src='https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral' alt='background carddd'></img>
        <img className='profileImg' src='https://influencity.com/static/images/aboutUs/team/LupeGomez.jpg' alt='background carddd'></img>
<h2> MYRIAM FARELLA</h2>
<p className='jobTitle'> DIRECTRICE</p>
<p className='abou'>Veiller à la perception de la cible est l’une de ses forces stratégiques.
Polyvalente et dévouée, elle est aussi douée en plans de communications
qu’en relations publiques et en gestion de communautés.
</p>
<button className='nbt'>Contacter</button>
<ul className='socialMedia'>
    <li><ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-facebook"></ion-icon> 
</li>
    <li> <ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-twitter"></ion-icon> </li>
    <li>  <ion-icon style={{'color':'black','margin':"2px", 'fontSize':"18px"}} name="logo-linkedin"></ion-icon> 
</li>
    <li>  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-instagram"></ion-icon> 
</li>

</ul>
        </div>
        <div data-aos="flip-up" className='carddd'>

<img className='cardImg' src='https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral' alt='background carddd'></img>
<img className='profileImg' src='https://influencity.com/static/images/aboutUs/team/DanielSanchez.jpg' alt='background carddd'></img>
<h2> BENJAMIN DUMAS</h2>
<p className='jobTitle'> DIRECTEUR MARKETING</p>
<p className='abou'>Veiller à la perception de la cible est l’une de ses forces stratégiques.
Polyvalente et dévouée, elle est aussi douée en plans de communications
qu’en relations publiques et en gestion de communautés. 
</p>
<Link to='/contact'><button className='nbt'>Contacter </button> </Link>
<ul className='socialMedia'>
<li><ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-facebook"></ion-icon> 
</li>
<li> <ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-twitter"></ion-icon> </li>
<li>  <ion-icon style={{'color':'black','margin':"2px", 'fontSize':"18px"}} name="logo-linkedin"></ion-icon> 
</li>
<li>  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-instagram"></ion-icon> 
</li>

</ul>
</div>
  <div  data-aos="fade-left" className='carddd'>

<img className='cardImg' src='https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral' alt='background carddd'></img>
<img className='profileImg' src='https://influencity.com/static/images/aboutUs/team/PatriciaRomero.jpg' alt='background carddd'></img>
<h2> PAULINE FERRAND </h2>
<p className='jobTitle'> CONSEILLÈRE, SERVICE CONSEIL </p>
<p className='abou'>Pauline est notre correspondante experte des salles de presse et des médias
au pays. Créative et carburant à l’adrénaline, elle est toujours à l'affut
de l'actualité lui permettant de présenter les meilleurs angles d’approches.</p>
<button className='nbt'>Contacter</button>
<ul className='socialMedia'>
<li><ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-facebook"></ion-icon> 
</li>
<li> <ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-twitter"></ion-icon> </li>
<li>  <ion-icon style={{'color':'black','margin':"2px", 'fontSize':"18px"}} name="logo-linkedin"></ion-icon> 
</li>
<li>  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-instagram"></ion-icon> 
</li>

</ul>
</div>
  <div   data-aos="fade-right" className='carddd'>

<img className='cardImg' src='https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral' alt='background carddd'></img>
<img className='profileImg' src='https://influencity.com/static/images/aboutUs/team/AlexCejudo.jpg' alt='background carddd'></img>
<h2> JEAN SÉBASTIEN</h2>
<p className='jobTitle'>  MARKETING NUMÉRIQUE
</p>
<p className='abou'>Sa philosophie : on n’a jamais trop d’énergie! Fasciné par le marketing
numérique, Jean-Sébastien est toujours prêt à optimiser le positionnement
des marques sur le Web… lorsqu’il n’est pas sur son vélo ou au crossfit.
Avec son organisation et son sens analytique bien développé, il suit de
près les nombreuses possibilités de ciblage en ligne qui ne cessent
d’évoluer.
</p>
<button className='nbt'>Contacter</button>
<ul className='socialMedia'>
<li><ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-facebook"></ion-icon> 
</li>
<li> <ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-twitter"></ion-icon> </li>
<li>  <ion-icon style={{'color':'black','margin':"2px", 'fontSize':"18px"}} name="logo-linkedin"></ion-icon> 
</li>
<li>  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-instagram"></ion-icon> 
</li>

</ul>
</div>
  <div data-aos="flip-up" className='carddd'>

<img className='cardImg' src='https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral' alt='background carddd'></img>
<img className='profileImg' src='https://influencity.com/static/images/aboutUs/team/BeaDominguez.jpg' alt='background carddd'></img>
<h2> JULIA BARTEZ</h2>
<p className='jobTitle'> CONTRÔLEUSE DES FINANCES</p>
<p className='abou'>Ne vous fiez pas à son attitude discrète. On dit d'elle qu'elle a une main
de fer dans un gant de velours. Qu'il s'agisse d’analyse de chiffres au
bureau ou de boxe au gym, elle n'est pas du genre à reculer devant un défi.
Sa maîtrise en administration des affaires ainsi que sa formation en
musique et en sciences font de cette contrôleuse des finances une force sur
laquelle il faut compter!
</p>
<button className='nbt'>Contacter</button>
<ul className='socialMedia'>
<li><ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-facebook"></ion-icon> 
</li>
<li> <ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-twitter"></ion-icon> </li>
<li>  <ion-icon style={{'color':'black','margin':"2px", 'fontSize':"18px"}} name="logo-linkedin"></ion-icon> 
</li>
<li>  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-instagram"></ion-icon> 
</li>

</ul>
</div>
  <div  data-aos="fade-left" className='carddd'>

<img className='cardImg' src='https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral' alt='background carddd'></img>
<img className='profileImg' src='https://cdn.builder.io/api/v1/image/assets%2F2488227b9563422abe5c730206ea2c72%2F37681ac18c604e3c819f97367cf73f58?format=webp&width=1600' alt='background carddd'></img>
<h2> MÉLODIE AUMAIS
</h2>
<p className='jobTitle'> COORDINATRICE STAGIAIRE</p>
<p className='abou'>Ne vous fiez pas à son attitude discrète. On dit d'elle qu'elle a une main
de fer dans un gant de velours. Qu'il s'agisse d’analyse de chiffres au
bureau ou de boxe au gym, elle n'est pas du genre à reculer devant un défi.
Sa maîtrise en administration des affaires ainsi que sa formation en
musique et en sciences font de cette contrôleuse des finances une force sur
laquelle il faut compter!
</p>
<button className='nbt'>Contacter</button>
<ul className='socialMedia'>
<li><ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-facebook"></ion-icon> 
</li>
<li> <ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-twitter"></ion-icon> </li>
<li>  <ion-icon style={{'color':'black','margin':"2px", 'fontSize':"18px"}} name="logo-linkedin"></ion-icon> 
</li>
<li>  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-instagram"></ion-icon> 
</li>

</ul>
</div>
    </div>
    
    
    </div>
    </section>
  )
}

export default Team
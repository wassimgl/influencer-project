import React from 'react';
import { Link } from 'react-router-dom';
import './apropos.css'

const Apropos = () => {
  return (
   <section className='props'>
   <div className='desc'> 
     <h1>A Propos de Nous</h1>
     <p>Nous sommes très fiers d'aider les marques et les agences quelle que soit leur taille à travers le monde.</p>
</div>
   <div className='about'>
<div className='inerSection'>
<h1>Notre Histoire</h1>
<p className='inerText'>Depuis le lancement d'Influencity en 2014, notre équipe n'a cessé d'enquêter et d'apprendre sur le marketing d'influence. Au fil de ces années, nous avons développé l'une des meilleures plateformes d'influence au monde, grâce à une équipe unique.<br/>
<br/>

Nous avons surmonté de multiples adversités, réussissant toujours à garder nos valeurs et notre mission : aider les agences et les marques, quelle que soit leur taille, à professionnaliser leurs stratégies de marketing d'influence, en étant plus productifs et efficaces, tout en économisant du temps et de l'argent.</p>
<div className='skils'>
    <Link to='/contact'><button>Contact</button></Link>
</div>
</div>

   </div>


   </section>
  )
}

export default Apropos
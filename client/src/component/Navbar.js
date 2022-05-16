import React,{useState} from 'react';

import {Link} from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  const [show,setShow]=useState(true)

 
  return (
    <section className='wlcm'>
    <nav>
        <label className='lolo'> InfluencerX </label>
       <ul>
       <li><Link to='/'>Home</Link></li> 
       <li><Link to='/'>A propos</Link></li> 
         <li><Link to='/team'> Notre Equipe </Link></li> 
        
        <li><Link to='/tarif'>Tarifs</Link></li>

        
       <li><Link to='/contact'> Contacter </Link></li> 

        
        </ul> 
        <label className='icona' onClick={()=>setShow(!show)}><ion-icon name="list-outline"></ion-icon></label>
    </nav>
    
  
</section>
    
  )
}

export default Navbar
import React from 'react';
// import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  // const dispatch = useDispatch()
  // const {isAuth} =  useSelector(state=>state.customer)
 
  return (
    <div>
    <header className='contain'>
        <div className='navbar'><img className='logo' height="50" width="140" src="https://influencermarketinghub.com/wp-content/uploads/2018/03/influencer_logo.png" alt="logo"/></div>
        <div className='navbar__item'> 
        <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/tarif'>Tarifs</Link>
        </div>
        <div>
        <Link to='/contact'> Contacter </Link>

        </div>
        <div>
        <Link to='/team'> Notre Equipe </Link>

        </div>
      
    </header>
    
  
</div>
    
  )
}

export default Navbar
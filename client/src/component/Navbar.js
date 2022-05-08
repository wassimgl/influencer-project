import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { logoutAction } from '../action/customerAction';
import './navbar.css'
const Navbar = () => {
  const dispatch = useDispatch()
  // const {isAuth} =  useSelector(state=>state.customer)
 const logout = (e) => { 
   e.preventDefault();
   dispatch(logoutAction())
  }
  return (
    <div>
    <header className='contain'>
        <div className='navbar'><img className='logo' height="50" width="140" src="https://influencermarketinghub.com/wp-content/uploads/2018/03/influencer_logo.png" alt="logo"/></div>
        <div className='navbar__item'> 
        <Link to='/'>Home</Link>
        </div>
        <div className='navbar__item'>
        <Link to='/contact'> Contact </Link>

        </div>
        <div className='navbar__item'>

        {/* {isAuth ? ( */}
          <>
          {/* <Link to= '/profile'>Profile</Link> */}
          <button className='white' onClick={logout}>Logout</button>
          </>
        {/* )  : (
          <>
       <Link to='/register'>Register</Link> */}
        <Link to='/login'>Login</Link>

        {/* )
        } */}
        </div> 
      
    </header>
    
  
</div>
    
  )
}

export default Navbar
import {useEffect} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from "react-hook-form";
import { register as registerAction } from '../action/influencerActions';
import './register.css';

const Register = () => { 
   const dispatch = useDispatch();
   const nav = useNavigate();
    const {register, handleSubmit} = useForm();
    const registerNewInfluencer = (data)=>{
        dispatch(registerAction(data,nav));
    };
//     const {isAuth} =  useSelector(state=>state.influencer.influencerInfo)
//     useEffect(()=>{
// if (isAuth) nav('/logininfluencer') 
//     }, [isAuth,nav]);
    return(
        <div className='signup'>
<div className='forme'>
        <div className='left'>
        <h1> Welcome back</h1>
        <Link to='/logininfluencer'>
<button  className='btn'>
    Sign in
</button>
        </Link>
</div>
 <div className="right">
 <div className='create'>
        <form onSubmit={handleSubmit(registerNewInfluencer)}>
       <h1> Create Account</h1>
           
          <div className="form-body">
              <div className="username">
              
        <input required type='text' name='firstName'  {...register("firstName")} placeholder='firstName' />
        </div>
        <div className="username">
              
        <input required type='text' name='lastName' {...register("lastName")} placeholder='lastName' />
        </div>
        <div className="email">
                 
        <input required type='email' name='email'  {...register("email")} placeholder='email' />
        </div>
        <div className="confirm-password">
                  
        <input required type='password' name='password' {...register("password")} placeholder='password' />
        </div>
        <div className="email">
                  
        <input required type= 'tel' name='phone'  {...register("phone")} placeholder='phone Number' />
        </div>
        <div className="email">
        <input required type='text' name='address'  {...register("address")} placeholder='address' />
        </div>
        <div className="email">
        <input required type='text' name='city'  {...register("city")} placeholder='city' />
        </div>
        <div className="email">
        <input required type='text' name='country'  {...register("country")} placeholder='country' />
        </div>
        <div className="footer">
      <button className='bnt' > Sign up </button> 
      </div> 
    </div>
    
    </form>
    </div>
    </div>
    </div>
    
    </div>
    
    )
    }
export default Register;
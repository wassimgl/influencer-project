import {useEffect} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from "react-hook-form";
import { register as registerAction } from '../action/influencerActions';
import './register.css';

const Registeri = () => { 
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
     
            <section className='signup'>
    <div className='formulaire'>
            <div className='inner'>
            <div className='imgHolder'><img src='https://d-art.ppstatic.pl/kadry/k/r/1/42/54/5736db4282772_o_original.jpg'/> </div>
        <form onSubmit={handleSubmit(registerNewInfluencer)}>
        <h3> inscrivez-vous</h3>
           
           <div className='formGroupe'>  
         <input className='formControl' required type='text' name='firstName'   {...register("firstName")} placeholder='first Name' />
         <input className='formControl' required type='text' name='lastName' {...register("lastName")} placeholder='last Name' />
 
         </div>
        
         <div className='formWarper'>
                  
         <input  className='formControl' required type='email' name='email'  {...register("email")} placeholder='email' />
         </div>
         <div className='formWarper'>
                   
         <input  className='formControl' required type='password' name='password' {...register("password")} placeholder='password' />
         </div>
         <div className='formWarper'>
                   
         <input  className='formControl' required type= 'tel' name='phone'  {...register("phone")} placeholder='phone Number' />
         </div>
         <div className='formWarper'>
         <input  className='formControl' required type='text' name='address'  {...register("address")} placeholder='address' />
         </div>
         <div className='formWarper'>
         <input  className='formControl' required type='text' name='city'  {...register("city")} placeholder='city' />
         </div>
         <div className='formWarper'>
         <input  className='formControl' required type='text' name='location'  {...register("location")} placeholder='location' />
         </div>
         <div className='formWarper'>
         <input  className='formControl' required type='text' name='avatar'  {...register("avatar")} placeholder='avatar' />
         </div>
       <button  > Register </button> 
       
       <div className='txt'>Vous avez de compte? <br/><Link to='/logininfluencer'><label>connectez-vous maintenant</label> </Link></div>
     
     </form>
     </div>
     </div>
     
     
     </section>
     
     )
     }
export default Registeri;
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from "react-hook-form";
import { login as loginAction } from '../action/userAction';

import './loginadmin.css'
const LoginAdmin = () => { 
   const dispatch = useDispatch();
   const nav = useNavigate();
    const {register, handleSubmit} = useForm();
   const {isAuth, errors} =  useSelector(state=>state.user)
    useEffect(()=>{
if (isAuth) nav('/dashbordadmin') 
    }, [isAuth,nav]);
    const loginUser = (data)=>{
      dispatch(loginAction(data));
  };
    return(
      <section className='signup'>
      <div className='formulaire'>
              <div className='inner'>
              <div className='imgHolder'><img src='https://d-art.ppstatic.pl/kadry/k/r/1/42/54/5736db4282772_o_original.jpg'/> </div>
       <form onSubmit={handleSubmit(loginUser)}>  
       <div className='loginForm'>
        <h1> Connectez-vous ici </h1>
        
        <div style={{'text-align':'center'}}>      <img className='avatar'  src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="/>
 </div>
 <div className='formWarper'> 

   
    <input className='formControl' type='email' name='email'  {...register("email")} placeholder='Entre votre email' />
    </div>

       
    <div className='formWarper'>        
  <input className='formControl' type='password' name='password' {...register("password")} placeholder='mot de passe' />
      
         </div>
        
         
         {errors && <p>{errors}</p>} 
         <button  > Connexion </button> 
      
       </div>
     </form>
     </div>
    </div>
  
    </section>
    
    )
    }

export default LoginAdmin
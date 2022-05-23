import {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from "react-hook-form";
import { login as loginAction } from '../action/customerAction';
import './login.css';

const Login = () => { 
   const dispatch = useDispatch();
   const nav = useNavigate();
    const {register, handleSubmit} = useForm();
   const {isAuth, errors} =  useSelector(state=>state.customer)
    useEffect(()=>{
if (isAuth) nav('/influencer') 
    }, [isAuth,nav]);
    const loginCustomer = (data)=>{
      dispatch(loginAction(data));
  };
    return(
      <section className='signup'>
<div className='formulaire'>
        <div className='inner'>
        <div className='imgHolder'><img src='https://filed8-27.my.mail.ru/pic?url=https:%2F%2Fcontent-8.foto.my.mail.ru%2Fmail%2Fineskots%2F_cover%2Fh-2.jpg&mw=1024&mh=1024&sig=0a608d425ccdf11c3bab3c925e1b9948'/> </div>
 
  
        <form onSubmit={handleSubmit(loginCustomer)}>
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
      
       <div className='txt'><Link to='/register'><label>Vous n'avez pas de compte? Inscrivez-vous maintenant</label> </Link></div>
       </div>
      
     </form>
     </div>
    </div>
  
    </section>
    
    )
    }
export default Login;
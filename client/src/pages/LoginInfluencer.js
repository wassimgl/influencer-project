import {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from "react-hook-form";
import { login as loginAction } from '../action/influencerActions';

const LoginInfluencer = () => { 
   const dispatch = useDispatch();
   const nav = useNavigate();
    const {register, handleSubmit} = useForm();
   const {isAuth, errors} =  useSelector(state=>state.influencer)
    useEffect(()=>{
if (isAuth) nav('/profile') 
    }, [isAuth,nav]);
    const loginInfluencer = (data)=>{
      dispatch(loginAction(data));
  };
 /*  console.log(); */
    return(
      <section className='signup'>
      <div className='formulaire'>
              <div className='inner'>
              <div className='imgHolder'><img src='https://content.beatstars.com/fit-in/500x500/filters:format(.jpeg):quality(80):fill(000000)/users/prod/647616/image/1608242399/DSC01952JPGuf1608242375662uf1608242393556.jpg'/> </div>
        <form onSubmit={handleSubmit(loginInfluencer)}>
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
      
       <div className='txt'><Link to='/registerinfluencer'><label>Vous n'avez pas de compte? Inscrivez-vous maintenant</label> </Link></div>
       </div>
      
     </form>
     </div>
    </div>
  
    </section>
    
    )
    }
export default LoginInfluencer;
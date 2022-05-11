import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from "react-hook-form";
import { login as loginAction } from '../action/influencerActions';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
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
    return(
        <div >
        <Container>
  <Row>
    <Col></Col>
    <Col> 
    <div className="log">
        <form onSubmit={handleSubmit(loginInfluencer)}>
        <div style={{'text-align':'center'}}>      <img className='avatar'  src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="/>
 </div>
  <h1> Login Here </h1>
                   <label  >Email </label>
         <input type='email' name='email'  {...register("email")} placeholder='email' />
        
         <br/>
                   <label className="form__label" > Password </label>
         <input type='password' name='password' {...register("password")} placeholder='password' />
      
         
        
         
         {errors && <p>{errors}</p>} 
       <button > Login </button>
       
    
    
     </form>
    
    </div>
    </Col>
    <Col></Col>
  </Row>
        
   </Container>
    </div>
    
    )
    }
export default LoginInfluencer;
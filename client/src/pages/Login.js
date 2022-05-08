import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from "react-hook-form";
import { login as loginAction } from '../action/customerAction';
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
        <div>
        <form onSubmit={handleSubmit(loginCustomer)}>
        <nav className="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
           
            </div>
            </nav>
            <div className="form">
          <div className="form-body">
              
        <div className="email">
                  <label className="form__label" >Email </label>
        <input type='email' name='email'  {...register("email")} placeholder='email' />
        </div>
        <div className="confirm-password">
                  <label className="form__label" > Password </label>
        <input type='password' name='password' {...register("password")} placeholder='password' />
        </div>
        
        <div className="footer">
        <br/>
        {errors && <p>{errors}</p>} 
      <button style={{ backgroundColor:"blue"}} > Login </button>
      
      </div> 
    </div>
    </div>
    </form>
    </div>
    
    )
    }
export default Login;
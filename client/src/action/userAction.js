import axios from 'axios';
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './types';
import { GET_USER_FAILED, GET_USER_LODING, GET_USER_SUCCESS } from './userTypes';



 export const login = (userData) =>async (dispatch)=> {
     try {
      const res = await  axios.post('/api/user/login', userData);
      dispatch({type : LOGIN_SUCCESS , payload: res.data})
     } catch (error) {
        dispatch({type : LOGIN_FAIL , 
            payload: error.response && error.response.data.msg
            ? error.response.data.msg
            : error.message,})
     } 
 };
 

 export const logoutAction = () =>{

return{
    type: LOGOUT
}
 };
 export const getUser = () =>async (dispatch)=> {
    try {
        dispatch({type: GET_USER_LODING})
     const res = await  axios.get('/api/user/');
     dispatch({type : GET_USER_SUCCESS , payload: res.data});
   
    } catch (error) {
       
       dispatch({type : GET_USER_FAILED , payload: error})
    } 
};


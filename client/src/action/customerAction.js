import axios from 'axios';
import { DELETE_CUSTOMER_FAILED, DELETE_CUSTOMER_SUCCESS, GET_CUSTOMER_FAILED, GET_CUSTOMER_LODING, GET_CUSTOMER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from './types';



export const getCustomer = () =>async (dispatch)=> {
    try {
        dispatch({type: GET_CUSTOMER_LODING})
     const res = await  axios.get('/api/customer/');
     dispatch({type : GET_CUSTOMER_SUCCESS , payload: res.data});
   
    } catch (error) {
       
       dispatch({type : GET_CUSTOMER_FAILED , payload: error})
    } 
};

export const register = (customerData, nav) =>async (dispatch)=> {
     try {
      const res = await  axios.post('/api/customer/register', customerData);
      dispatch({type : REGISTER_SUCCESS , payload: res.data});
      nav('/login');
     } catch (error) {
        console.log(customerData);
        dispatch({type : REGISTER_FAIL , payload: error})
     } 
 };


 export const login = (customerData) =>async (dispatch)=> {
     try {
      const res = await  axios.post('/api/customer/login', customerData);
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
 }




 export const deleteCustomer = (id) =>async (dispatch)=> {
    try {
        dispatch({type: DELETE_CUSTOMER_SUCCESS})
     const res = await  axios.delete(`/api/customer/${id}`);
     dispatch({type : GET_CUSTOMER_SUCCESS , payload: res.data});
   
    } catch (error) {
       
       dispatch({type : DELETE_CUSTOMER_FAILED , payload: error})
    } 
};
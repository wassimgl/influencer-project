import axios from "axios";
import { ADD_INFLUENCER_FAILED, DELETE_INFLUENCER_FAILED,   GET_INFLUENCERI_FAILED, GET_INFLUENCERI_LODING,  GET_INFLUENCERI_SUCCESS, GET_INFLUENCER_FAILED, GET_INFLUENCER_LODING, GET_INFLUENCER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, UPDATE_INFLUENCER_FAILED,  } from "./influencerTypes";


export const getInfluencer = () =>async (dispatch)=> {
    try {
        dispatch({type: GET_INFLUENCER_LODING})
     const res = await  axios.get('/api/influencer/');
     dispatch({type : GET_INFLUENCER_SUCCESS , payload: res.data});
    
   
    } catch (error) {
       
       dispatch({type : GET_INFLUENCER_FAILED , payload: error})
    } 
};

export const getInfluenceri = (inflId) =>async (dispatch)=> {
    
    try {
        dispatch({type: GET_INFLUENCERI_LODING})
        
     const res = await  axios.get(`/api/influencer/${inflId}`
     
     ,{headers:{token:localStorage.getItem('token')}});
   
   
     dispatch({type : GET_INFLUENCERI_SUCCESS , payload: res.data});
   
    } catch (error) {
       
       dispatch({type : GET_INFLUENCERI_FAILED , payload: error})
    } 
};
export const register = (influencerData, nav) =>async (dispatch)=> {
    try {
     const res = await  axios.post('/api/influencer/register', influencerData);
     dispatch({type : REGISTER_SUCCESS , payload: res.data});
     nav('/logininfluencer');
    } catch (error) {
       console.log(influencerData);
       dispatch({type : REGISTER_FAIL , payload: error})
    } 
};

export const login = (influencerData) =>async (dispatch)=> {
    try {
     const res = await  axios.post('/api/influencer/login', influencerData);
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

export const deleteInfluencer = (inflId) =>async (dispatch)=> {
   
    try {
       
      await  axios.delete(`/api/influencer/${inflId}`);
      dispatch(getInfluencer());
   
    } catch (error) {
       
       dispatch({type : DELETE_INFLUENCER_FAILED , payload: error})
    } 
};

export const updateInfluencer = (influencerData,inflId) =>async (dispatch)=> {
   
    try {
       
   await  axios.put(`/api/influencer/${inflId}`,influencerData);
     dispatch(getInfluencer())

   
   
    } catch (error) {
       
       dispatch({type : UPDATE_INFLUENCER_FAILED , payload: error})
    } 
};
export const addNewInfluencer = (influencerInfo) =>async (dispatch)=> {
    try {
       
   await  axios.post('/api/influencer/',influencerInfo);
     dispatch(getInfluencer());
    
   
    } catch (error) {
       
       dispatch({type : ADD_INFLUENCER_FAILED , payload: error})
    } 
};
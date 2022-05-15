import axios from "axios";
import { DELETE_INFLUENCER_FAILED, DELETE_INFLUENCER_SUCCESS, GET_INFLUENCERI_FAILED, GET_INFLUENCERI_LODING, GET_INFLUENCERI_SUCCESS, GET_INFLUENCER_FAILED, GET_INFLUENCER_LODING, GET_INFLUENCER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, UPDATE_INFLUENCER_FAILED, UPDATE_INFLUENCER_SUCCESS } from "./influencerTypes";


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
     const res = await  axios.get(`/api/influencer/${inflId}`);
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
       
     const res = await  axios.delete(`/api/influencer/${inflId}`);
     dispatch({type : DELETE_INFLUENCER_SUCCESS ,  payload: res.data})

     dispatch({type : GET_INFLUENCER_SUCCESS , payload: res.data});
   
    } catch (error) {
       
       dispatch({type : DELETE_INFLUENCER_FAILED , payload: error})
    } 
};

export const updateInfluencer = (inflId) =>async (dispatch)=> {
   
    try {
       
     const res = await  axios.put(`/api/influencer/${inflId}`);
     dispatch({type : UPDATE_INFLUENCER_SUCCESS ,  payload: res.data})

     dispatch({type : GET_INFLUENCER_SUCCESS , payload: res.data});
   
    } catch (error) {
       
       dispatch({type : UPDATE_INFLUENCER_FAILED , payload: error})
    } 
};
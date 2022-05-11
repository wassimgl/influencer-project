import axios from "axios";
import { GET_INFLUENCERI_FAILED, GET_INFLUENCERI_LODING, GET_INFLUENCERI_SUCCESS, GET_INFLUENCER_FAILED, GET_INFLUENCER_LODING, GET_INFLUENCER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "./influencerTypes";


export const getInfluencer = () =>async (dispatch)=> {
    try {
        dispatch({type: GET_INFLUENCER_LODING})
     const res = await  axios.get('/api/influencer/');
     dispatch({type : GET_INFLUENCER_SUCCESS , payload: res.data});
   
    } catch (error) {
       
       dispatch({type : GET_INFLUENCER_FAILED , payload: error})
    } 
};

export const getInfluenceri = () =>async (dispatch)=> {
    try {
        dispatch({type: GET_INFLUENCERI_LODING})
     const res = await  axios.get('/api/influencer/');
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
}
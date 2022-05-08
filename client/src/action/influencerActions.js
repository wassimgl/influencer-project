import axios from "axios";
import { GET_INFLUENCER_FAILED, GET_INFLUENCER_LODING, GET_INFLUENCER_SUCCESS } from "./influencerTypes";


export const getInfluencer = () =>async (dispatch)=> {
    try {
        dispatch({type: GET_INFLUENCER_LODING})
     const res = await  axios.get('/api/influencer/');
     dispatch({type : GET_INFLUENCER_SUCCESS , payload: res.data});
   
    } catch (error) {
       
       dispatch({type : GET_INFLUENCER_FAILED , payload: error})
    } 
};
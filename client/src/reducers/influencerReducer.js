const { GET_INFLUENCER_LODING, GET_INFLUENCER_FAILED, GET_INFLUENCER_SUCCESS, LOGIN_FAIL, REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } = require("../action/influencerTypes");

const iniState = {
    influencerList:[],
    token:localStorage.getItem('token') || null,
    errors:null,
    isAuth:Boolean(localStorage.getItem('isAuth')) || false,
};

const influencerReducer = (state = iniState,{type,payload}) => { 
    switch(type){
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return{...state, errors : payload }
            case REGISTER_SUCCESS:
                return{ 
                    ...state,
                    influencerInfo: payload.newInfluencer,
                    errors:null,
         };
         case LOGIN_SUCCESS:
             localStorage.setItem('token',payload.token);
             localStorage.setItem('isAuth',true);

            return{ 
                ...state,
                influencerInfo: payload.existInfluencer,
                 token: payload.token,
                 isAuth: true,
                errors:null,
     };
     case LOGOUT:
         localStorage.clear()
         return {
             ...state, 
             token: null,
            customerInfo: {} ,
            isAuth: false 
         };
        
        case GET_INFLUENCER_LODING:
            return{...state, loading : true }
            case GET_INFLUENCER_SUCCESS:
                return{ 
                    ...state, influencerList: payload, loading: false, errors: false}
                    
            case GET_INFLUENCER_FAILED:
                return{ 
                    ...state, influencerList: payload, loading: false, errors: payload}
    default:
        return state;
                }
 };
 export default influencerReducer;
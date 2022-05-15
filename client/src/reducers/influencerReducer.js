const { GET_INFLUENCER_LODING, GET_INFLUENCER_FAILED, GET_INFLUENCER_SUCCESS, LOGIN_FAIL, REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, DELETE_INFLUENCER_FAILED, DELETE_INFLUENCER_SUCCESS, UPDATE_INFLUENCER_SUCCESS, UPDATE_INFLUENCER_FAILED } = require("../action/influencerTypes");

const iniState = {
    influencerList:[],
    token:localStorage.getItem('token') || null,
    errors:null,
    isAuth:Boolean(localStorage.getItem('isAuth')) || false,
    influencer: null,
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
            //  localStorage.setItem('influencer',JSON.stringify(payload.existInfluencer))

            return{ 
                ...state,
                influencerInfo: payload.existInfluencer,
                 token: payload.token,
                 isAuth: true,
                errors:null,
     };
     case DELETE_INFLUENCER_FAILED:
        
        return{...state, errors : payload }
       
     case DELETE_INFLUENCER_SUCCESS:
        
       

        return{  inflId: payload, errors : false
           
 };

 case UPDATE_INFLUENCER_FAILED:
        
    return{...state, errors : payload }
   
 case UPDATE_INFLUENCER_SUCCESS:
    
   

    return{  inflId: payload, errors : false
       
};
     case LOGOUT:
         localStorage.clear()
         return {
             ...state, 
             token: null,
            influencerInfo: {} ,
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
                };
            
 };
 export default influencerReducer;
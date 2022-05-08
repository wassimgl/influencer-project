import { GET_USER_FAILED, GET_USER_LODING, GET_USER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../action/userTypes";

const initialState = {
    userList:[],
    token:localStorage.getItem('token') || null,
    errors:null,
    isAuth:Boolean(localStorage.getItem('isAuth')) || false,
};

const userReducer = (state = initialState,{type,payload}) => { 
    switch(type){
        case LOGIN_FAIL:
        
            return{...state, errors : payload }
           
         case LOGIN_SUCCESS:
            
            localStorage.setItem('token',payload.token);
            localStorage.setItem('isAuth',true);

            return{ 
                ...state,
                userInfo: payload.existUser,
                token: payload.token,
                isAuth: true,
               errors:null,
     };
     case LOGOUT:
         localStorage.clear()
         return {
             ...state, 
             token: null,
            userInfo: {} ,
            isAuth: false 
         };
         case GET_USER_LODING:
            return{...state, loading : true }
            case GET_USER_SUCCESS:
                return{ 
                    ...state, userList: payload, loading: false, errors: false}
                    
            case GET_USER_FAILED:
                return{ 
                    ...state, userList: payload, loading: false, errors: payload}
        default : 
        return state;
    }
 };
 export default userReducer;
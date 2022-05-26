import { REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, GET_CUSTOMER_LODING, GET_CUSTOMER_SUCCESS, GET_CUSTOMER_FAILED, DELETE_CUSTOMER_FAILED, DELETE_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_FAILED, UPDATE_CUSTOMER_SUCCESS } from "../action/types";

const initState = {
    customerList:[],
    token:localStorage.getItem('token') || null,
    errors:null,

    customerInfo: {},
    isAuth:Boolean(localStorage.getItem('isAuth')) || false,
};

const customerReducer = (state = initState,{type,payload}) => { 
    switch(type){
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return{...state, errors : payload }
            case REGISTER_SUCCESS:
                return{ 
                    ...state,
                    customerInfo: payload.newCustomer,
                    errors:null,
         };
        
         case LOGIN_SUCCESS:
             localStorage.setItem('token',payload.token);
             localStorage.setItem('isAuth',true);
            //  localStorage.setItem('customer',JSON.stringify(payload.existCustomer))


            return{ 
                ...state,
                customerInfo: payload.existCustomer,
                 token: payload.token,
                 isAuth: true,
                errors:null,
     };
     case DELETE_CUSTOMER_FAILED:
        
        return{...state, errors : payload }
       
     case DELETE_CUSTOMER_SUCCESS:

        return{  custId: payload, errors : false
           
 };
 case UPDATE_CUSTOMER_FAILED:
        
    return{...state, errors : payload }
   
 case UPDATE_CUSTOMER_SUCCESS:

    return{  custId: payload, errors : false
       
};
     case LOGOUT:
         localStorage.clear()
         return {
             ...state, 
             token: null,
            customerInfo: {} ,
            isAuth: false 
         };
         case GET_CUSTOMER_LODING:
            return{...state, loading : true }
            case GET_CUSTOMER_SUCCESS:
                return{ 
                    ...state, customerList: payload, loading: false, errors: false}
                    
            case GET_CUSTOMER_FAILED:
                return{ 
                    ...state, customerList: payload, loading: false, errors: payload}
        default : 
        return state;
    }
 };
 export default customerReducer;
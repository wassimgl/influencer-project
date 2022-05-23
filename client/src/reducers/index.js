import { combineReducers } from 'redux';
import customerReducer from './customerReducer';
import  influencerReducer from './influencerReducer';
import userReducer from './userReducer';

export default combineReducers({influencer: influencerReducer , customer: customerReducer ,  user: userReducer});
import  { useEffect } from 'react'
import {  useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getInfluenceri, logoutAction } from '../action/influencerActions';


const Profile = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

   const {isAuth} =  useSelector(state=>state.influencer) 

 const {listInfluencer} = useSelector((state)=>state.influencer); 
    useEffect(()=> {
    // localStorage.getItem('existInfluencer')

    dispatch(getInfluenceri())
  },[dispatch]);
  const logout = (e) => { 
    e.preventDefault();
    dispatch(logoutAction())
   }
  useEffect(()=>{
    if (! isAuth) nav('/logininfluencer') 
        }, [isAuth,nav]);
  return (
    <div>
      profile
      <button className='white' onClick={logout}>Logout</button>
      
    
    </div>
  )
}

export default Profile
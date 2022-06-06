import  { useEffect } from 'react'
import {  useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getInfluencer, logoutAction } from '../action/influencerActions';
import EditProfile from '../component/EditProfile';
import './profile.css';


const Profile = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
 
   const {isAuth,influencerInfo} =  useSelector(state=>state.influencer) 

   useEffect(()=> {
     dispatch(getInfluencer())
   },[dispatch]);

  const logout = (e) => { 
    e.preventDefault();
    dispatch(logoutAction())
   }
  useEffect(()=>{
    if (! isAuth) nav('/logininfluencer') 
        }, [isAuth,nav]);
  return (
    <section className='proo'>
   
    <div className='rapper'>
    <div className='profileCard'>
      <div className='profileCardImg'>
       <img src={influencerInfo.avatar} alt="profile"/> 
      </div>
      
   
   
   
       <div className='profileCardCnt'>
       <div className='profileCardName'><strong> {influencerInfo.firstName} {influencerInfo.lastName} </strong></div>
       <div className='profileCardTxt'><strong>{influencerInfo.job}</strong></div>
       <div className='profileCardLoc'>
       
        <span className='profileCardLocTxt'>
       <strong> <ion-icon name="location-outline"></ion-icon> {influencerInfo.location} </strong>
        </span>
       </div>
  
       <div className='profile-card-inf'>
        <div className='profile-card-inf__item'>
         <div className='profile-card-inf__title'>{influencerInfo.followers}</div>
         <div className='profile-card-inf__txt'>Followers</div>
        </div>
       
        <div className='profile-card-inf__item'>
         <div className='profile-card-inf__title'>{influencerInfo.posts}</div>
         <div className='profile-card-inf__txt'>Posts</div>
        </div>
        <div className='profile-card-inf__item'>
         <div className='profile-card-inf__title'>{influencerInfo.comments}</div>
         <div className='profile-card-inf__txt'> Comments </div>
        </div>
        <div className='profile-card-inf__item'>
         <div className='profile-card-inf__title'>{influencerInfo.likes}</div>
         <div className='profile-card-inf__txt'>Likes</div>
        </div>
        
       </div>
    
       <div className='profile-card-ctr'>
    
        <button className='profile-card__button button--blue js-message-btn'><EditProfile influencer={influencerInfo}  /> </button>
       
        <button  className='profile-card__button button--orange js-message-btn' onClick={logout}>Logout</button>
    
       </div> 
   
      
     </div>
     
     </div>
      </div> 
   </section>
     
      
    
  
  )
}

export default Profile
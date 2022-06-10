import React, { useEffect } from 'react';
import './influencer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { getInfluencer } from '../action/influencerActions';
import { logoutAction } from '../action/customerAction';
import { useNavigate } from 'react-router-dom';



 
const Influencer = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    const {isAuth} =  useSelector(state=>state.customer)
    const {influencerList} = useSelector((state)=>state.influencer);
    useEffect(()=> {
      dispatch(getInfluencer())
    },[dispatch]);
    useEffect(()=>{
        Aos.init({duration: 2000});
          },[]  );
          const logout = (e) => { 
            e.preventDefault();
            dispatch(logoutAction())
           }
           useEffect(()=>{
            if (! isAuth) nav('/login') 
                }, [isAuth,nav]);
       
  return (
    <section className='team'>
     
   
    <div className='desc'>
    <h1>Trouvez les bons influenceurs en quelques secondes... <br/>Des influenceurs fiables et vérifiés par la plateforme Influencity !</h1>
    </div>
    <div className='tableHeader'>
      <p>Liste des influenceurs</p>
      <div>
       
 <button className='addNew'  onClick={logout}> Logout </button>
       
      </div>
    </div>
  
    <div className='cardWarrper'>
    
        <div data-aos="fade-right" className='carddd'>
        {influencerList.map(el=>(
            <>
        <img className='cardImg' src='https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral' alt='background carddd'></img>
       
            <img  className='profileImg'  src={el.avatar} alt='influencer image'/>
<h2> {el.firstName} {el.lastName}</h2>
<p className='jobTitle'> {el.job}</p>

<span className='profileCardLocTxt'>
       <strong> <ion-icon name="location-outline"></ion-icon> {el.location} </strong>
        </span>
       
<p className='abou'>{el.bio}</p>
<div className='profile-card-inf'>
<div className='profile-card-inf__item'>
<p className='profile-card-inf__title'>{el.followers}</p>
<div className='profile-card-inf__txt'>Followers</div>
</div>
<div className='profile-card-inf__item'>
<p className='profile-card-inf__title'>{el.posts}</p>
<div className='profile-card-inf__txt'>Posts</div>
</div>
<div className='profile-card-inf__item'>
<p className='profile-card-inf__title'>{el.likes}</p>
<div className='profile-card-inf__txt'>Likes</div>
</div>
<div className='profile-card-inf__item'>
<p className='profile-card-inf__title'>{el.comments}</p>
<div className='profile-card-inf__txt'> Comments</div>
</div>
</div>

<div className='button'>
<button  className='Follow'>Follow Me</button> 

</div>
<ul className='socialMedia'>
    <li><ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-facebook"></ion-icon> 
</li>
    <li> <ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-twitter"></ion-icon> </li>
    <li>  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-youtube"></ion-icon> 
</li>
    <li>  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-instagram"></ion-icon> 
</li>

</ul>
      </>
 ))};
</div>

        </div>
  
 <div className='button'>
 </div>
 

        </section>
  )
};

export default Influencer
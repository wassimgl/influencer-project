import React, { useEffect } from 'react';
import './influencer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { getInfluencer } from '../action/influencerActions';
import { logoutAction } from '../action/customerAction';
import { Link, useNavigate } from 'react-router-dom';



 
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
     
    <div className='conta'>
    <div className='desc'>
    <h1>Trouvez les bons influenceurs en quelques secondes... <br/>Des influenceurs fiables et vérifiés par la plateforme Influencity !</h1>
    </div>
    <div className='tableHeader'>
      <p>Liste des influenceurs</p>
      <div>
        <input placeholder='Chercher...'/>
        <button className='addNew'>Followers</button>
      </div>
    </div>
    {influencerList.map(el=>(
            <>
    <div className='cardWarrper'>
        <div data-aos="fade-right" className='carddd'>
       
        <img className='cardImg' src='https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral' alt='background carddd'></img>
       
            <img  className='profileImg'  src={el.avatar} alt='influencer image'/>
<h2> {el.firstName} {el.lastName}</h2>
<p className='jobTitle'> {el.job}</p>
<p className='abou'>{el.bio}
</p>
<div className='button'>
<button  className='Follow'>Follow Me</button> 
<Link to='/influencer/msg'><button className='Follow'>Contacter</button></Link>
</div>
<ul className='socialMedia'>
    <li><ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-facebook"></ion-icon> 
</li>
    <li> <ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-twitter"></ion-icon> </li>
    <li>  <ion-icon style={{'color':'black','margin':"2px", 'fontSize':"18px"}} name="logo-linkedin"></ion-icon> 
</li>
    <li>  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-instagram"></ion-icon> 
</li>

</ul>

</div>

        </div>
        </>
 ))};
 <div className='button'>
 <button  onClick={logout}>Logout</button>
 </div>
        </div>
        
        </section>
  )
};

export default Influencer
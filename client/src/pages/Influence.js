import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getInfluencer } from '../action/influencerActions';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './influence.css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Message from '../component/Message';
import { logoutAction } from '../action/customerAction';



const Influence = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    const {isAuth} =  useSelector(state=>state.customer)
    // const {influencerList} = useSelector((state)=>state.influencer);
    useEffect(()=> {
      dispatch(getInfluencer())
    },[dispatch]);
    const [openModal, setOpenModal] = useState(false);
    const logout = (e) => { 
        e.preventDefault();
        dispatch(logoutAction())
       }
       useEffect(()=>{
        if (! isAuth) nav('/login') 
            }, [isAuth,nav]);
   
  return (
    <section className='influencer'>
   
    <div className='containerr'>
    <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
    <SwiperSlide><div className='content'>
<div className='card'>
    <div className='cardContent'>
        <div className='image'>

            <img src='https://th.bing.com/th/id/R.4f4746352459e7cc79f4d0097434d66b?rik=bB1MtbUPhN0qcg&pid=ImgRaw&r=0' alt=''></img>
        </div>
<div className='icons'>
<ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-facebook"></ion-icon> 
    
    <ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-twitter"></ion-icon> 

  <ion-icon style={{'color':'black','margin':"2px", 'fontSize':"18px"}} name="logo-linkedin"></ion-icon> 

  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-instagram"></ion-icon> 
  <ion-icon style={{'color':'green','margin':"2px", 'fontSize':"18px"}} name="logo-whatsapp"></ion-icon>
</div>
<div className='nameProfession'>
    <span className='name'>Hela Daghri</span>
    <span className='profession'> actress</span>
</div>
<div className='rating'>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star-outline"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star-outline"></ion-icon>
</div>
<div className='button'>
<button className='Follow'>Follow Me</button>
 <button
 className='message' 
  onClick={()=>{
      setOpenModal(true);
      }}  
      >
      Message
      </button> 
      </div>
      


    </div>
</div>




</div>


</SwiperSlide>

    <SwiperSlide><div className='content'>
<div className='card'>
    <div className='cardContent'>
        <div className='image'>

            <img src='https://i.pinimg.com/originals/58/32/ef/5832ef6d7aa05d34b34f6d2e65d1dc03.jpg' alt=''></img>
        </div>
<div className='icons'>
<ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-facebook"></ion-icon> 
    
    <ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-twitter"></ion-icon> 

  <ion-icon style={{'color':'black','margin':"2px", 'fontSize':"18px"}} name="logo-linkedin"></ion-icon> 

  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-instagram"></ion-icon> 
  <ion-icon style={{'color':'green','margin':"2px", 'fontSize':"18px"}} name="logo-whatsapp"></ion-icon>
</div>
<div className='nameProfession'>
    <span className='name'>Hela Daghri</span>
    <span className='profession'> actress</span>
</div>
<div className='rating'>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star-outline"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star-outline"></ion-icon>
</div>
<div className='button'>
<button className='Follow'>Follow Me</button>
<button  className='message'>Message</button>


</div>
    </div>
</div>




</div>

</SwiperSlide>




<SwiperSlide>
<div className='content'>
<div className='card'>
    <div className='cardContent'>
        <div className='image'>

            <img src='https://th.bing.com/th/id/R.4f4746352459e7cc79f4d0097434d66b?rik=bB1MtbUPhN0qcg&pid=ImgRaw&r=0' alt=''></img>
        </div>
<div className='icons'>
<ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-facebook"></ion-icon> 
    
    <ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-twitter"></ion-icon> 

  <ion-icon style={{'color':'black','margin':"2px", 'fontSize':"18px"}} name="logo-linkedin"></ion-icon> 

  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-instagram"></ion-icon> 
  <ion-icon style={{'color':'green','margin':"2px", 'fontSize':"18px"}} name="logo-whatsapp"></ion-icon>
</div>
<div className='nameProfession'>
    <span className='name'>Hela Daghri</span>
    <span className='profession'> actress</span>
</div>
<div className='rating'>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star-outline"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star-outline"></ion-icon>
</div>
<div className='button'>
<button className='Follow'>Follow Me</button>
<button className='message'>Message</button>

</div>
    </div>
</div>




</div>
</SwiperSlide>
<SwiperSlide>
<div className='content'>
<div className='card'>
    <div className='cardContent'>
        <div className='image'>

            <img src='https://th.bing.com/th/id/R.4f4746352459e7cc79f4d0097434d66b?rik=bB1MtbUPhN0qcg&pid=ImgRaw&r=0' alt=''></img>
        </div>
<div className='icons'>
<ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-facebook"></ion-icon> 
    
    <ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-twitter"></ion-icon> 

  <ion-icon style={{'color':'black','margin':"2px", 'fontSize':"18px"}} name="logo-linkedin"></ion-icon> 

  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-instagram"></ion-icon> 
  <ion-icon style={{'color':'green','margin':"2px", 'fontSize':"18px"}} name="logo-whatsapp"></ion-icon>
</div>
<div className='nameProfession'>
    <span className='name'>Hela Daghri</span>
    <span className='profession'> actress</span>
</div>
<div className='rating'>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star-outline"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star-outline"></ion-icon>
</div>
<div className='button'>
<button className='Follow'>Follow Me</button>
<button className='message'>Message</button>

</div>
    </div>
</div>




</div>
</SwiperSlide>


        <SwiperSlide><div className='content'>
<div className='card'>
    <div className='cardContent'>
        <div className='image'>

            <img src='https://i.pinimg.com/originals/58/32/ef/5832ef6d7aa05d34b34f6d2e65d1dc03.jpg' alt=''></img>
        </div>
<div className='icons'>
<ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-facebook"></ion-icon> 
    
    <ion-icon style={{'color':'blue','margin':"2px", 'fontSize':"18px"}} name="logo-twitter"></ion-icon> 

  <ion-icon style={{'color':'black','margin':"2px", 'fontSize':"18px"}} name="logo-linkedin"></ion-icon> 

  <ion-icon style={{'color':'red','margin':"2px", 'fontSize':"18px"}} name="logo-instagram"></ion-icon> 
  <ion-icon style={{'color':'green','margin':"2px", 'fontSize':"18px"}} name="logo-whatsapp"></ion-icon>
</div>
<div className='nameProfession'>
    <span className='name'>Hela Daghri</span>
    <span className='profession'> actress</span>
</div>
<div className='rating'>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star-outline"></ion-icon>
<ion-icon style={{'color':'yellow','margin':"2px", 'fontSize':"18px"}} name="star-outline"></ion-icon>
</div>
<div className='button'>
<button className='Follow'>Follow Me</button>
<button className='message'>Message</button>

</div>
    </div>
</div>




</div></SwiperSlide>

</Swiper>
{openModal && <Message closeModal={setOpenModal}/>}
    </div>


    <div className='navbar__item'>

{/* {isAuth ? ( */}
  <>
  {/* <Link to= '/profile'>Profile</Link> */}
  <button className='white' onClick={logout}>Logout</button>
  </>
{/* )  : (
  <>
<Link to='/register'>Register</Link> */}


{/* )
} */}
</div> 
     
      {/* {influencerList.map(el=>(
          <>
          <div> {el.firstName}</div>
         
          <br/>
          {el.lastName}
          <br/>
          {el.email}
<div>{el.avatar}</div>
<div>{el.bio} </div>
{el.location}

          </>
          ))}; */}
          
    </section>
  )
}

export default Influence

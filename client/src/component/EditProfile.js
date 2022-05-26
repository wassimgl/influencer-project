import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {Button, Modal} from 'react-bootstrap'

import { updateInfluencer } from '../action/influencerActions';
import './editprofile.css'
const EditProfile = ({influencer}) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [avatar, setAvatar] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [followers, setFollowers] = useState('')
  const [userName, setUserName] = useState('')
  const [location, setLocation] = useState('')
  const [posts, setPosts] = useState('')
  const [likes, setLikes] = useState('')
  const [comments, setComments] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleUpdate = (inflId) => { 
      dispatch(updateInfluencer({avatar,firstName,lastName,userName,location,followers,posts,comments,likes}, inflId))
      handleClose()
     };
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Update
    </Button>

    <Modal show={show} onHide={handleClose}>
    <section className='signup'>
    <div className='formWarper'>
          <input className='formControl' type="text" name="avatar" placeholder='avatar' onChange={(e)=>setAvatar(e.target.value)} />
          </div>
    <div className='formGroupe'>  
          <input className='formControl' type="text" name="firstName" placeholder='first name' onChange={(e)=>setFirstName(e.target.value)} />
          <input className='formControl' type="text" name="lastName" placeholder='last name' onChange={(e)=>setLastName(e.target.value)} />
          </div>
          <div className='formWarper'>
          <input className='formControl' type="text" name="userName" placeholder='userName' onChange={(e)=>setUserName(e.target.value)} />
           </div>
          <div className='formWarper'>
          <input className='formControl' type="text"  name="location" placeholder='location' onChange={(e)=>setLocation(e.target.value)} />
          </div>
          
          <div className='formWarper'>
          <input className='formControl' type="text" name="followers" placeholder='followers' onChange={(e)=>setFollowers(e.target.value)} />
          </div>
          <div className='formWarper'>
          <input className='formControl' type="text" name="posts" placeholder='posts' onChange={(e)=>setPosts(e.target.value)} />
           </div>
          <div className='formWarper'>
          <input className='formControl' type="text"  name="comments" placeholder='Comments' onChange={(e)=>setComments(e.target.value)} />
          </div>
          
          <div className='formWarper'>
          <input className='formControl' type="text" name="likes" placeholder='likes' onChange={(e)=>setLikes(e.target.value)} />
          </div>
         
         
        
         
      <Button onClick={()=>handleUpdate(influencer._id)}> edit </Button>
   </section>
    </Modal>
  </>
);
}

export default EditProfile
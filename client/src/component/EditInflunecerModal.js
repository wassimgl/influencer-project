import React from 'react'
import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap'
import { useDispatch} from 'react-redux';
import { updateInfluencer } from '../action/influencerActions';
import './editinfluencer.css'
const EditInflunecerModal = ({influencer}) => {
    const dispatch = useDispatch();
   
    const [show, setShow] = useState(false);
    const [avatar, setAvatar] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleUpdate = (inflId) => { 
      dispatch(updateInfluencer({avatar,firstName,lastName,email,phone,location}, inflId))
      handleClose()
     };
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      edit
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
          <input className='formControl' type="text" name="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className='formWarper'>
          <input className='formControl' type="text" name="phone" placeholder='phone' onChange={(e)=>setPhone(e.target.value)} />
           </div>
        
          <div className='formWarper'>
          <input className='formControl' type="text"  name="location" placeholder='location' onChange={(e)=>setLocation(e.target.value)} />
          </div>
          
      <Button onClick={()=>handleUpdate(influencer._id)}> edit </Button>
   </section>
    </Modal>
  </>
);
}

export default EditInflunecerModal
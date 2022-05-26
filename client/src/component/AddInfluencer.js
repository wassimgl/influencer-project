import React from 'react'
import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addNewInfluencer } from '../action/influencerActions';
import './add.css';
function AddInfluencer ()  {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const {register, handleSubmit} = useForm();
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const addInfluencer = (data)=>{
    dispatch(addNewInfluencer({...data}));
    handleClose();
  };
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Add Influencer
    </Button>
 

    <Modal show={show} onHide={handleClose}>
    <div className='formulaire'>
        <div className='inner'>
    <form onSubmit={handleSubmit(addInfluencer)} >
    <div className='formWarper'>
    
    <div className='formGroupe'>  
         <input className='formControl' required type='text' name='firstName'   {...register("firstName")} placeholder='first Name' />
         <input className='formControl' required type='text' name='lastName' {...register("lastName")} placeholder='last Name' />
 
         </div>
        
         <div className='formGroupe'>
                  
         <input  className='formControl' required type='email' name='email'  {...register("email")} placeholder='email' />
                   
         <input  className='formControl' required type='password' name='password' {...register("password")} placeholder='password' />
         </div>
         <div className='formGroupe'>
                   
         <input  className='formControl' required type= 'tel' name='phone'  {...register("phone")} placeholder='phone Number' />
         
         <input  className='formControl' required type='text' name='location'  {...register("location")} placeholder='location' />
         </div>
         <div className='formGroupe'>
         <input  className='formControl' required type='text' name='avatar'  {...register("avatar")} placeholder='avatar' />
        
         <input  className='formControl' required type='text' name='bio'  {...register("bio")} placeholder='bio' />
         </div>
         <div className='formGroupe'>
         <input  className='formControl' required type='text' name='job'  {...register("job")} placeholder='job' />
        
         <input  className='formControl' required type='text' name='followers'  {...register("followers")} placeholder='followers' />
         </div>
         <div className='formGroupe'>
         <input  className='formControl' required type='text' name='posts'  {...register("posts")} placeholder='posts' />
         
         <input  className='formControl' required type='text' name='likes'  {...register("likes")} placeholder='likes' />
         </div>
         <div className='formWarper'>
         <input  className='formControl' required type='text' name='comments'  {...register("comments")} placeholder='comments' />
         </div>
          </div>
          <Button variant="primary">Add Influencer</Button>
          </form>
          </div>
          </div>
    </Modal>
  
  </> 
  )
}

export default AddInfluencer
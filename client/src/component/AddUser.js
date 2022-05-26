import React from 'react'
import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addNewUser } from '../action/userAction';

function AddUser ()  {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const {register, handleSubmit} = useForm();
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const addUser = (data)=>{
    dispatch(addNewUser({...data}));
    handleClose();
  };
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Add   Admin
    </Button>
    <Modal show={show} onHide={handleClose}>
    <div className='formulaire'>
        <div className='inner'>
    <form onSubmit={handleSubmit(addUser)} >
    <div className='formWarper'>
    
    <div className='formGroupe'>  
         <input className='formControl' required type='text' name='firstName'   {...register("firstName")} placeholder='first Name' />
         <input className='formControl' required type='text' name='lastName' {...register("lastName")} placeholder='last Name' />
 
         </div>
       
                  
         <input  className='formControl' required type='email' name='email'  {...register("email")} placeholder='email' />
                   
         <input  className='formControl' required type='password' name='password' {...register("password")} placeholder='password' />
        
      
                   
         <input  className='formControl' required type= 'tel' name='phone'  {...register("phone")} placeholder='phone Number' />
                  
         </div>
          <Button variant="primary">Add Admin</Button>
          </form>
          </div>
          </div>
    </Modal>
  
  </> 
  )
}

export default AddUser
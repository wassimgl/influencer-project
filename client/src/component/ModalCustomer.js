import React from 'react'
import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addCustomer } from '../action/customerAction';


function ModalCustomer ()  { 
   const dispatch = useDispatch();
   const [show, setShow] = useState(false);
   const {register, handleSubmit} = useForm();

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const addNewCustomer = (data)=>{
     dispatch(addCustomer({...data }));
    
     handleClose();

 };

  
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Add Customer
        </Button>
    
        <Modal show={show} onHide={handleClose}>
        <div className='formulaire'>
        <div className='inner'>
        <form  onSubmit={handleSubmit(addNewCustomer)} >
        <div className='formWarper'>
        
        <div className='formGroupe'>  
        <input className='formControl' required type='text' name='firstName'   {...register("firstName")} placeholder='first Name' />
        <input className='formControl' required type='text' name='lastName' {...register("lastName")} placeholder='last Name' />

        </div>
       
        <div className='formWarper'>
                 
        <input  className='formControl' required type='email' name='email'  {...register("email")} placeholder='email' />
        </div>
        <div className='formWarper'>
                  
        <input  className='formControl' required type='password' name='password' {...register("password")} placeholder='password' />
        </div>
        <div className='formWarper'>
                  
        <input  className='formControl' required type= 'tel' name='phone'  {...register("phone")} placeholder='phone Number' />
        </div>
        <div className='formWarper'>
        <input  className='formControl' required type='text' name='address'  {...register("address")} placeholder='address' />
        </div>
        <div className='formWarper'>
        <input  className='formControl' required type='text' name='city'  {...register("city")} placeholder='city' />
        </div>
        <div className='formWarper'>
        <input  className='formControl' required type='text' name='country'  {...register("country")} placeholder='country' />
        </div>
              </div>
              <Button variant="primary">Add Customer</Button>
              </form>
              </div>
              </div>
        </Modal>
      </> 
    
    )
    }
export default ModalCustomer;
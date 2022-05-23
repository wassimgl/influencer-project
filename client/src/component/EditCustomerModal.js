import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import {updateCustomer} from '../action/customerAction';
import './editcustomer.css';
function EditCustomerModal({customer}) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleUpdate = (custId) => { 
      dispatch(updateCustomer({firstName,lastName,email,phone,address,country}, custId))
      handleClose()
    };
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          edit
        </Button>
       
        <Modal show={show} onHide={handleClose}>
        <section className='signup'>
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
          <input className='formControl' type="text" name="address" placeholder='address' onChange={(e)=>setAddress(e.target.value)} />
          </div>
          <div className='formWarper'>
          <input className='formControl' type="text" name="country" placeholder='country' onChange={(e)=>setCountry(e.target.value)} />
          </div>
          <Button   onClick={()=>handleUpdate(customer._id)}> edit </Button>
       
       
          </section> </Modal>
      </>
    );
  }
  export default EditCustomerModal
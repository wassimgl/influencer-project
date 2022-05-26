import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, deleteUser} from '../action/userAction';
import EditUserModal from '../component/EditUserModal'
import './listAdmin.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AddUser from '../component/AddUser';

const ListAdmin = () => {
    const dispatch = useDispatch();

 
  const {userList} = useSelector((state)=>state.user);
  useEffect(()=> {
    dispatch(getUser())
  },[dispatch]);
  
  const handleDelete = (userId) => { 
    dispatch(deleteUser(userId))
   };
   
  
  return (
    <section className='tabo'>
      <div className='tableau'>
    <div className='tableHeader'>
      <p className='pip'>Admin Details</p>
      <div>
       <AddUser/>
      </div>
    </div>
    <Table style={{'marginTop':"60px" }} striped bordered hover >
  <thead style={{'padding': "15px"}}>
    <tr>
     
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>

      <th>Country</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    </thead>
       
    {userList.map(el=>(
        <>
        <tbody>
        <tr>
       
          <td>{el.firstName}</td>
          <td>{el.lastName}</td>
          <td>{el.email} </td>
          <td>{el.country}</td>
        <td> <EditUserModal user={el}/> </td>
          <td><Button variant="danger" onClick={()=>handleDelete(el._id)} > delete </Button> </td>
     
    </tr>
    </tbody>
  
    </>
    ))};
  </Table>

      
  <div className='pignation'>
 <Link to='/dashbordadmin'><button className='dash'>  Dashbord Admin </button> </Link>

 </div>

     

     

    </div>
    </section>
  )
};

export default ListAdmin
import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { deleteCustomer, getCustomer } from '../action/customerAction';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './list.css';
const ListCustomer = () => {
  const dispatch = useDispatch();
  const handleDelete = (id) => { 
    dispatch(deleteCustomer(id))
   };
  const {customerList} = useSelector((state)=>state.customer);
  useEffect(()=> {
    dispatch(getCustomer())
  },[dispatch]);
  
  return (
    <div>
    <Table style={{'marginTop':"60px" }} striped bordered hover  variant="dark">
  <thead style={{'padding': "15px"}}>
    <tr>
     
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Country</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    </thead>
    {customerList.map(el=>(
        <>
        
       

    <tbody>
    <tr>
      
      <td>{el.firstName}</td>
      <td>{el.lastName}</td>
      <td>{el.email}</td>
      <td>{el.phone}</td>
      <td>{el.address}</td>
      <td>{el.country}</td>
      <td><button> edit </button></td>
      <td><button  onClick={()=>handleDelete(el._id)}> delete </button></td>
    </tr>
    </tbody>
  
    </>
    ))};
  </Table>

      <Link to='/dashbordadmin'><button className='btt'>  Dashbord Admin </button> </Link>

     

    </div>
  )
};


export default ListCustomer
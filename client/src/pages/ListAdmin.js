import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, deleteUser, updateUser } from '../action/userAction';

import Table from 'react-bootstrap/Table';

const ListAdmin = () => {
    const dispatch = useDispatch();

 
  const {userList} = useSelector((state)=>state.user);
  useEffect(()=> {
    dispatch(getUser())
  },[dispatch]);
  
  const handleDelete = (userId) => { 
    dispatch(deleteUser(userId))
   };
   const handleUpdate = (userId) => { 
    dispatch(updateUser(userId))
   };
  
  return (
    <div>
     
    <Table style={{'marginTop':"60px" }} striped bordered hover  variant="dark">
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
        <td> <button onClick={()=>handleUpdate(el._id)}> edit </button></td>
          <td><button onClick={()=>handleDelete(el._id)} > delete </button> </td>
     
    </tr>
    </tbody>
  
    </>
    ))};
  </Table>

      <Link to='/dashbordadmin'><button className='btt'>  Dashbord Admin </button> </Link>

     

    </div>
  )
};

export default ListAdmin
import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { deleteInfluencer, getInfluencer, updateInfluencer } from '../action/influencerActions';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


const ListInfluencer = () => {
  const dispatch = useDispatch();
  const {influencerList} = useSelector((state)=>state.influencer);
  useEffect(()=> {
    dispatch(getInfluencer())
  },[dispatch]);
  const handleDelete = (inflId) => { 
    dispatch(deleteInfluencer(inflId))
   };
   const handleUpdate = (inflId) => { 
    dispatch(updateInfluencer(inflId))
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
    
      {influencerList.map(el=>(
        <>
        
       

        <tbody>
        <tr>
          
          <td>{el.firstName}</td>
          <td>{el.lastName}</td>
          <td>{el.email}</td>
         <td>{el.location}</td>
         <td><button onClick={()=>handleUpdate(el._id)}> edit </button></td>
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

export default ListInfluencer
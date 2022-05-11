import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getInfluencer } from '../action/influencerActions';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


const ListInfluencer = () => {
  const dispatch = useDispatch();
  const {influencerList} = useSelector((state)=>state.influencer);
  useEffect(()=> {
    dispatch(getInfluencer())
  },[dispatch]);
  
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
         <td><button> edit </button></td>
         <td><button> delete </button></td>
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
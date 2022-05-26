import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { deleteInfluencer, getInfluencer } from '../action/influencerActions';
import { Link } from 'react-router-dom';
import EditInfluencerModal from '../component/EditInflunecerModal'
import './listInfluencer.css';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import AddInfluencer from '../component/AddInfluencer';

const ListInfluencer = () => {
  const dispatch = useDispatch();
  const {influencerList} = useSelector((state)=>state.influencer);
  useEffect(()=> {
    dispatch(getInfluencer())
  },[dispatch]);
  const handleDelete = (inflId) => { 
    dispatch(deleteInfluencer(inflId))
   };
   
  
  return (
    <section className='tabo'>
    <div className='tableau'>
    <div className='tableHeader'>
      <p className='pip'>Influencer Details</p>
      <div>
        <AddInfluencer/>
      </div>
    </div>
    <Table style={{'marginTop':"60px" }} striped bordered hover >
  <thead >
    <tr>
    <th>Image</th>

      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Country</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    </thead>
    
      {influencerList.map(el=>(
        <>
        
       

        <tbody>
        <tr>
        <td><img  src={el.avatar} alt='image'/></td>
          <td>{el.firstName}</td>
          <td>{el.lastName}</td>
          <td>{el.email}</td>
          <td>{el.phone}</td>
         <td>{el.location}</td>
         <td><EditInfluencerModal influencer={el}/></td>
         <td><Button variant="danger"  onClick={()=>handleDelete(el._id)}> delete </Button></td>
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

export default ListInfluencer
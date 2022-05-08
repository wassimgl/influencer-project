import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getUser } from '../action/userAction';
const ListAdmin = () => {
  const dispatch = useDispatch();
  const {userList} = useSelector((state)=>state.user);
  useEffect(()=> {
    dispatch(getUser())
  },[dispatch]);
  
  return (
    <div>
   
      {userList.map(el=>(
        <>
         
          <h6>{el.email} </h6>
          <h5>{el.firstName}</h5>
          <h5>{el.lastName}</h5>
          <h5>{el.country}</h5>
          <h4>{el.active}</h4>
        </>
      ))}
    </div>
  )
};

export default ListAdmin
import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getCustomer } from '../action/customerAction';
const ListCustomer = () => {
  const dispatch = useDispatch();
  const {customerList} = useSelector((state)=>state.customer);
  useEffect(()=> {
    dispatch(getCustomer())
  },[dispatch]);
  
  return (
    <div>
    
      {customerList.map(el=>(
        <>
          <h4> {el.firstName}</h4>
          <h5>{el.lastName}</h5>
          <h6>{el.email} </h6>
       

        </>
      ))};

    </div>
  )
};


export default ListCustomer
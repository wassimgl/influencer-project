import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getInfluencer } from '../action/influencerActions';
const ListInfluencer = () => {
  const dispatch = useDispatch();
  const {influencerList} = useSelector((state)=>state.influencer);
  useEffect(()=> {
    dispatch(getInfluencer())
  },[dispatch]);
  
  return (
    <div>
    
      {influencerList.map(el=>(
        <>
          <h4> {el.firstName}</h4>
          <h5>{el.lastName}</h5>
          <h6>{el.email} </h6>
          <img src={el.avatar}/>

        </>
      ))}
    </div>
  )
};

export default ListInfluencer
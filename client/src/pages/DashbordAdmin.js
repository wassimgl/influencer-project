import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './dashbord.css'
import { useDispatch } from 'react-redux';
import { logoutAction } from '../action/userAction';

const DashbordAdmin = () => {
  const dispatch = useDispatch()
  // const {isAuth} =  useSelector(state=>state.customer)
 const logout = (e) => { 
   e.preventDefault();
   dispatch(logoutAction())
  }
  return (
    <div>
            <Container>
  <Row>
    <Col></Col>
    <Col>
    <div className='log'>
 
    
    <form>
    <Link to='/dashbord/listinfluncer' ><button>influencer table</button> </Link>
<Link to='/dashbord/listcustomer'><button>customer table</button> </Link>
<Link to='/dashbord/listadmin'><button> Admin table </button> </Link>
</form>

          
          <button className='white' onClick={logout}>Logout</button>
  
         
</div>
</Col>
<Col></Col>
</Row>
</Container>
    </div>
  )
}

export default DashbordAdmin
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './dashbord.css'

const DashbordAdmin = () => {
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

</div>
</Col>
<Col></Col>
</Row>
</Container>
    </div>
  )
}

export default DashbordAdmin
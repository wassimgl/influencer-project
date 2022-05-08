import React from "react";
import {  MDBContainer } from "mdbreact";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const FooterPage = () => {
  return (
    <div>
    <Container>
  <Row>
    <Col></Col>
    <Col></Col>
  
         
        <li> <ion-icon name="logo-facebook"></ion-icon> </li>
<li> <ion-icon name="logo-twitter"></ion-icon> </li>
<li> <ion-icon name="logo-linkedin"></ion-icon> </li>
<li> <ion-icon name="logo-instagram"></ion-icon> </li>
        
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Influencer.fr </a>
        </MDBContainer>
           
    </div>
    </Row>
    </Container>
  
</div>
      
      
  );
}

export default FooterPage;
import React from "react";
import {  MDBContainer } from "mdbreact";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const FooterPage = () => {
  return (
    <div>
    <div className="foot">
    <Container fluid>
  <Row>
    <Col>
    <ion-icon style={{'color':'black', 'padding':'10px', 'height':50, 'width':20}} name="logo-facebook"></ion-icon> 
    
    <ion-icon style={{'color':'black', 'padding':'10px', 'height':50, 'width':20}} name="logo-twitter"></ion-icon> 

  <ion-icon style={{'color':'black', 'padding':'10px', 'height':50, 'width':20}} name="logo-linkedin"></ion-icon> 

  <ion-icon style={{'color':'black', 'padding':'10px', 'height':50, 'width':20}} name="logo-instagram"></ion-icon> 

</Col>
    <Col>  
    <div className="footer-copyright text-center py-3">
        <MDBContainer style={{'color':'black','fontSize': 20}} fluid>All rights reserved
          &copy; {new Date().getFullYear()}  Copyright. 
        </MDBContainer>
           
    </div>
    </Col>
  
         
        
        
      
    </Row>
    </Container>
  
</div>
   </div>   
      
  );
}

export default FooterPage;
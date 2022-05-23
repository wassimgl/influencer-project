import React from "react";
import { Link } from "react-router-dom";
// import {  MDBContainer } from "mdbreact";
import './footer.css';
// import Col from 'react-bootstrap/Col';
const FooterPage = () => {
  return (
    <section className="fly">
    <footer>
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="soc">
    <li className="ft"><ion-icon style={{'color':'blue', 'padding':'10px', 'height':50, 'width':20}} name="logo-facebook"></ion-icon></li> 
    
    <li className="ft"><ion-icon style={{'color':'blue', 'padding':'10px', 'height':50, 'width':20}} name="logo-twitter"></ion-icon></li> 

 <li className="ft"> <ion-icon style={{'color':'black', 'padding':'10px', 'height':50, 'width':20}} name="logo-linkedin"></ion-icon> </li>

 <li className="ft"> <ion-icon style={{'color':'red', 'padding':'10px', 'height':50, 'width':20}} name="logo-instagram"></ion-icon> </li>
</ul>
<ul className="men">
<li><Link to='/propos'>A propos</Link></li> 
         <li><Link to='/service'> Services </Link></li> 
</ul>    
<p>©2022 Inluencer Project |All rights reserved</p>      

</footer>
   </section>   
      
  );
}

export default FooterPage;
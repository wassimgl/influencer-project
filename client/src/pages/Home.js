import React, { useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';
import './home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
      },[]  );
  return (
    <div>
    <Container>
    <Row>
       
                    
                    
                     <Col>
                     <h1 >Votre plateforme d’influence au quotidien</h1>
                     <br/>
            <p>L’influence marketing n’a jamais été aussi simple ! <br/>
            <br/>
            Démarrez facilement des campagnes d’influence impactantes ! Faites découvrir vos produits et services à des millions de consommateurs ciblés et commencez à générer des ventes.</p>
            </Col>
            <Col>
           
           <img width="500" height="250" src="https://influencity.com/static/images/en/home/campaign-strategies@3x.png"/>
           </Col>
            
          </Row>
          <Row>
          <Col></Col>
          <Col>
          
            <div className='bt'>
            <Link to='/register'>  <button    > I am a customer</button></Link>
            <Link to='/registerinfluencer'><button classeName='acc'  >I am a influencer</button> </Link>
            </div>
            </Col>
            <Col></Col>
            </Row>
        
          <div className='marq'>
          <h2>+ de 200 marques nous font confiance</h2>
          </div>

            <div className='containe'>
            <div className='row'>
            <ul className='sec'>
            <li  style={{padding: 15}}>
            <img data-aos="fade-right" src="https://www.influence4you.com/images/v10/starbuck-logo.svg" alt="Starbucks" width="53" height="88"/>
            </li>
            <li style={{padding: 15}}>
            <img data-aos="zoom-in" src="https://influencity.com/static/images/aboutUs/brands/Sansung-logo.jpg" alt="Dior" width="89" height="88"/>
            </li> 
            <li style={{padding: 15}}>
            <img data-aos="zoom-in" src="https://www.influence4you.com/images/v10/dior-logo.svg" alt="Dior" width="89" height="88"/>
            </li>            
            <li style={{padding: 15}}>
            <img data-aos="zoom-in" src="https://influencity.com/static/images/aboutUs/brands/Upfield-logo.jpg" alt="eBay" width="82" height="88"/>            </li>
            <li style={{padding: 15}}>
            <img data-aos="zoom-in" src="https://www.influence4you.com/images/v10/Lacoste-logo.svg" alt="Lacoste" width="109" height="88"/>            </li>
            <li style={{padding: 15}}>
            <img data-aos="zoom-in" src="https://influencity.com/static/images/aboutUs/brands/Aliexpress-logo.jpg" alt="Dior" width="89" height="88"/>
            </li> 
            <li style={{padding: 15}}>
            <img data-aos="zoom-in" src="https://www.influence4you.com/images/v10/prime-video-icon.svg" alt="Amazon Prime Video" width="148" height="88"/>            </li>
            <li style={{padding: 15}}>
            <img data-aos="zoom-in" src="https://influencity.com/static/images/aboutUs/brands/Reprise-logo.jpg" alt="Lego" width="70" height="88"/>            </li>
            <li style={{padding: 15}}>
            <img data-aos="zoom-in" src="https://www.influence4you.com/images/v10/tinder-logo.svg" alt="Tinder" width="49" height="88"/>            </li>
            <li style={{padding: 15}}>
            <img data-aos="fade-left" width="70" height="70" src="https://influencity.com/static/images/aboutUs/brands/Octagon-logo.jpg" data-src="https://findly.co/wp-content/uploads/2021/02/Sodebo-300x121.png" class="attachment-medium size-medium lazyloaded" alt="Sodebo client Influentia"/>            </li>

</ul>
            </div>
            </div> 
        <div className='marqe'>

        <h2>Ils en parlent mieux que nous !</h2>
       
        </div>
        <Row className='comm'>
       
        <Col>
  <div className='cant'> <p>Nous avons décidé de prendre la plateforme Findly pour optimiser nos campagnes. Le module de Recherche est vraiment un gain de temps incroyable et très pratique. </p>
 <div className='cama'>
  <div className='nom'>
  <img  src="https://findly.co/wp-content/uploads/2022/04/thara-150x150.webp" />
  </div>
     <div className='name'>
     Thara Tremblay-Nantel  <br/>
    <p className='parae'>Fondatrice</p>

     </div>     
     </div>
   </div>
   </Col>

   <Col>
  <div className='cant'> <p> La plateforme Influencer est vite devenu un indispensable pour nos équipes ! Et un grand bravo aux chefs de projets qui restent disponibles pour la moindre question ! </p>
  <div className='cama'>
          <div className='nom'>
          <img  src="https://findly.co/wp-content/uploads/2022/04/remy-150x150.webp" />
          </div>
          <div className='name'>
          Remy Siriex - Agence Anouk  <br/>
    <p className='parae'>Community Manager</p>
</div>
     </div>
  </div>
  </Col>
  <Col>
  <div className='cant'> <p> Un superbe outil d’analyse de campagnes de marketing d’influence. Les équipes sont disponibles et réactives ! Trouvez facilement les influenceurs pertinents</p>   
  <div className='cama'>
  <div className='nom'>
  <img  src="https://findly.co/wp-content/uploads/2022/04/kim-150x150.webp" ></img>
  </div>
  <div className='name'>
    Kim Hua - Wellcom​ <br/>
    <p className='parae'>Consultante  Marketing</p>
</div>
     </div>
    </div>
    </Col>  

        </Row>
        </Container>  
</div>
    
  )
}

export default Home
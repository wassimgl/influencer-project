import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
const Home = () => {
  return (
    <div>
        <div className="content">
                    
                     <div className="ho">
                     <h1 className="aceuille">Votre plateforme d’influence au quotidien</h1>
                     <br/>
            <p>L’influence marketing n’a jamais été aussi simple ! <br/>
            <br/>
            Démarrez facilement des campagnes d’influence impactantes ! Faites découvrir vos produits et services à des millions de consommateurs ciblés et commencez à générer des ventes.</p>
            <img width="500" height="250" src="https://influencity.com/static/images/en/home/campaign-strategies@3x.png"/>
            </div>
            <div className='btn'>
            <Link to='/register'>  <button style={{ backgroundColor: "#CE6A6B"}}  > I am a customer</button></Link>
            <Link to='/register'><button  style={{ backgroundColor: "#CE6A6B"}} >I am a influencer</button> </Link>
            </div>
          </div>
          <div className='marq'>
          <h2>+ de 200 marques nous font confiance</h2>

            <div className='container'>
            <div className='row'>
            <ul className='sec'>
            <li style={{padding: 15}}>
            <img src="https://www.influence4you.com/images/v10/starbuck-logo.svg" alt="Starbucks" width="53" height="88"/>
            </li>
            
            <li style={{padding: 15}}>
            <img src="https://www.influence4you.com/images/v10/dior-logo.svg" alt="Dior" width="89" height="88"/>
            </li>            
            <li style={{padding: 15}}>
            <img src="https://www.influence4you.com/images/v10/eBay-logo.svg" alt="eBay" width="82" height="88"/>            </li>
            <li style={{padding: 15}}>
            <img src="https://www.influence4you.com/images/v10/Lacoste-logo.svg" alt="Lacoste" width="109" height="88"/>            </li>
            <li style={{padding: 15}}>
            <img src="https://www.influence4you.com/images/v10/prime-video-icon.svg" alt="Amazon Prime Video" width="148" height="88"/>            </li>
            <li style={{padding: 15}}>
            <img src="https://www.influence4you.com/images/v10/lego-logo.svg" alt="Lego" width="70" height="88"/>            </li>
            <li style={{padding: 15}}>
            <img src="https://www.influence4you.com/images/v10/tinder-logo.svg" alt="Tinder" width="49" height="88"/>            </li>
            <li style={{padding: 15}}>
            <img width="70" height="70" src="https://findly.co/wp-content/uploads/2021/02/Sodebo-300x121.png" data-src="https://findly.co/wp-content/uploads/2021/02/Sodebo-300x121.png" class="attachment-medium size-medium lazyloaded" alt="Sodebo client Influentia"/>            </li>

</ul>
            </div>
            </div> 
          </div>
        <div className='marqe'>

        <h2>Ils en parlent mieux que nous !</h2>
        <p>+ de 200 marques nous font confiance</p>
       
        <div className='wrapper'>
  <div> <p>Nous avons décidé de prendre la plateforme Findly pour optimiser nos campagnes. Le module de Recherche est vraiment un gain de temps incroyable et très pratique. </p>
  <div className='nom'>
  <img width="150" height="150" src="https://findly.co/wp-content/uploads/2022/04/thara-150x150.webp" data-src="https://findly.co/wp-content/uploads/2022/04/thara-150x150.webp" class="lae-image full ls-is-cached lazyloaded" alt=""/>
  
   
     <div className='name'>
     Thara Tremblay-Nantel <br/>
    <p1>Fondatrice</p1>

     </div>
     
     
   </div>
   </div>
  <div> <p>
  La plateforme Influencer est vite devenu un indispensable pour nos équipes ! Et un grand bravo aux chefs de projets <br/> qui restent disponibles pour la moindre question !
          </p>
          <div className='nom'>
          <img width="150" height="150" src="https://findly.co/wp-content/uploads/2022/04/remy-150x150.webp" data-src="https://findly.co/wp-content/uploads/2022/04/remy-150x150.webp" class="lae-image full lazyloaded" alt="" data-srcset="https://findly.co/wp-content/uploads/2022/04/remy-150x150.webp 150w, https://findly.co/wp-content/uploads/2022/04/remy.webp 200w" data-sizes="(max-width: 150px) 100vw, 150px" sizes="(max-width: 150px) 100vw, 150px" srcset="https://findly.co/wp-content/uploads/2022/04/remy-150x150.webp 150w, https://findly.co/wp-content/uploads/2022/04/remy.webp 200w"/>
          <div className='name'>
          Remy Siriex - Agence Anouk Deque <br/>
    <p1>Community Manager</p1>
</div>
     </div>
  </div>
  <div> <p> Un superbe outil d’analyse de campagnes de marketing d’influence. Les équipes sont disponibles et réactives ! Trouvez facilement les influenceurs pertinents</p>   
  <div className='nom'>
  <img width="150" height="150" src="https://findly.co/wp-content/uploads/2022/04/kim-150x150.webp" data-src="https://findly.co/wp-content/uploads/2022/04/kim-150x150.webp" class="lae-image full lazyloaded" alt="kim" data-srcset="https://findly.co/wp-content/uploads/2022/04/kim-150x150.webp 150w, https://findly.co/wp-content/uploads/2022/04/kim.webp 200w" data-sizes="(max-width: 150px) 100vw, 150px" sizes="(max-width: 150px) 100vw, 150px" srcset="https://findly.co/wp-content/uploads/2022/04/kim-150x150.webp 150w, https://findly.co/wp-content/uploads/2022/04/kim.webp 200w"></img>
  <div className='name'>
    Kim Hua - Wellcom​ <br/>
    <p1>Consultante Influence Marketing</p1>
</div>
     </div>
    </div>
         

        </div>
        </div>
        
</div>
    
  )
}

export default Home
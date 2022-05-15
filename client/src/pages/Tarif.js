import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './tarif.css';
const Tarif = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
          },[]  );
  return (
      <section className='pricing'>
    <div className='prix'>
    <div className='prixTop'>
        <h1>Choisissez l'offre adaptée à vos besoins !</h1>
        <p>Mensuel</p>
    </div>
    <div  className='prixItems'>
        <div data-aos="fade-up" className='prixItem'>
            <h3>Starter</h3>
            <p>Débuter en marketing d’influence</p>
            <div className='prixitemPrice'>
                
                <span className='price'>89</span>
                <span className='euro'>€</span>
                <span className='periode'> /mois</span>
            </div>
            <ul className='prixitemInfo'>
<li>2 Listes d’influenceurs</li>
<li>10 Influenceurs / liste </li>
<li>   1 Export de contacts / mois</li>
            </ul>
            <button>Start free trial</button>
        </div>
        <div data-aos="fade-down" className='prixItem'>
            <h3>Pro</h3>
            <p>Structurer ses opérations influenceurs</p>
            <div className='prixitemPrice'>
                <span className='euro'>€</span>
                <span className='price'>250</span>
                <span className='periode'>HT/mois</span>
            </div>
            <ul className='prixitemInfo'>
<li>5 Listes d’influenceurs</li>
<li>20 Influenceurs / liste </li>
<li>   5 Export de contacts / mois</li>
            </ul>
            <button>Start free trial</button>
        </div>
        <div data-aos="fade-up" className='prixItem'>
            <h3>Premium</h3>
            <p>Devenir expert de l’influence</p>
            <div className='prixitemPrice'>
                <span className='euro'>€</span>
                <span className='price'>589</span>
                <span className='periode'>HT/mois</span>
            </div>
            <ul className='prixitemInfo'>
<li>∞ Listes d’influenceurs</li>
<li>100 Influenceurs / liste </li>
<li>   100 Export de contacts / mois</li>
            </ul>
            <button>Start free trial</button>
        </div>
        
    </div>
    
    </div>
    <div className='prix'>
    <div className='prixTop'>

        <p>Trimestriel</p>
    </div>
    <div className='prixItems'>
        <div  data-aos="fade-down" className='prixItem'>
            <h3>Starter</h3>
            <p>Débuter en marketing d’influence</p>
            <div className='prixitemPrice'>
                
                <span className='price'>69</span>
                <span className='euro'>€</span>
                <span className='periode'> /mois</span>
            </div>
            <ul className='prixitemInfo'>
<li>2 Listes d’influenceurs</li>
<li>10 Influenceurs / liste </li>
<li>   1 Export de contacts / mois</li>
            </ul>
            <button>Start free trial</button>
        </div>
        <div data-aos="fade-up" className='prixItem'>
            <h3>Pro</h3>
            <p>Structurer ses opérations influenceurs</p>
            <div className='prixitemPrice'>
                <span className='euro'>€</span>
                <span className='price'>214</span>
                <span className='periode'>HT/mois</span>
            </div>
            <ul className='prixitemInfo'>
<li>5 Listes d’influenceurs</li>
<li>20 Influenceurs / liste </li>
<li>   5 Export de contacts / mois</li>
            </ul>
            <button>Start free trial</button>
        </div>
        <div data-aos="fade-down" className='prixItem'>
            <h3>Premium</h3>
            <p>Devenir expert de l’influence</p>
            <div className='prixitemPrice'>
                <span className='euro'>€</span>
                <span className='price'>519</span>
                <span className='periode'>HT/mois</span>
            </div>
            <ul className='prixitemInfo'>
<li>∞ Listes d’influenceurs</li>
<li>∞ Influenceurs / liste </li>
<li>   100 Export de contacts / mois</li>
            </ul>
            <button>Start free trial</button>
        </div>
        
    </div>
    
    </div>
    <div className='prix'>
    <div className='prixTop'>

        <p>Annuel</p>
    </div>
    <div className='prixItems'>
        <div data-aos="fade-up" className='prixItem'>
            <h3>Starter</h3>
            <p>Débuter en marketing d’influence</p>
            <div className='prixitemPrice'>
                
                <span className='price'>49</span>
                <span className='euro'>€</span>
                <span className='periode'> /mois</span>
            </div>
            <ul className='prixitemInfo'>
<li>2 Listes d’influenceurs</li>
<li>10 Influenceurs / liste </li>
<li>   1 Export de contacts / mois</li>
            </ul>
            <button>Start free trial</button>
        </div>
        <div data-aos="fade-down" className='prixItem'>
            <h3>Pro</h3>
            <p>Structurer ses opérations influenceurs</p>
            <div className='prixitemPrice'>
                <span className='euro'>€</span>
                <span className='price'>178</span>
                <span className='periode'>HT/mois</span>
            </div>
            <ul className='prixitemInfo'>
<li>5 Listes d’influenceurs</li>
<li>20 Influenceurs / liste </li>
<li>   5 Export de contacts / mois</li>
            </ul>
            <button>Start free trial</button>
        </div>
        <div data-aos="fade-up" className='prixItem'>
            <h3>Premium</h3>
            <p>Devenir expert de l’influence</p>
            <div className='prixitemPrice'>
                <span className='euro'>€</span>
                <span className='price'>449</span>
                <span className='periode'>HT/mois</span>
            </div>
            <ul className='prixitemInfo'>
<li>∞ Listes d’influenceurs</li>
<li>∞ Influenceurs / liste </li>
<li>   100 Export de contacts / mois</li>
            </ul>
            <button>Start free trial</button>
        </div>
        
    </div>
    
    </div>
    </section>
  )
}

export default Tarif
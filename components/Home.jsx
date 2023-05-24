import React from "react";
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMapMarkerAlt, faUser, } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


 function Home() {
  return (
    <>
    <body className={styles.body}>
    <div>
      <header className={styles.header}>

        <div className={styles.menu}>

      

        <ul  className={styles.font_gauche}>
        <li><FontAwesomeIcon icon={faBars} /></li>
        </ul>
        
        <h1 className={styles.music_store}>music store</h1>
        <ul className={styles.font_droite}>

       
        <li><FontAwesomeIcon icon={faUser} /></li>
        <li><FontAwesomeIcon icon={faMapMarkerAlt} /></li>
        <li><FontAwesomeIcon icon={faShoppingCart} /></li>
        </ul>
        </div>

        <div className={styles.implosive}>
          <h1 className={styles.titre1}>PHANTOM</h1>
          <span className={styles.implosiv}>IMPLOSIVE SOUND</span>
        </div>

        <div className="btns">
          <button className={styles.discover}>DISCOVER</button>
          <button className={styles.buy}>BUY</button>
        </div>

      </header>
    </div>

    <div className={styles.textsoundbar}>
     <h1 className={styles.titre1}> LATEST LAUNCH  
         </h1>
     <h1 className={styles.titre2}> DIONE SOUNDBAR 
         </h1>
         <div className={styles.soundbar}>
      </div>
      <div>
      <button className={styles.btnsoundbar}>Discover</button>
      </div>
      </div>
      
      <div className={styles.mesimages}>
      <div className={styles.produit1}>
      <div className={styles.texte}>
        <p>PHANTOM I white <br></br> <span span className={styles.span}>A class of its own.</span> </p>
      </div>
      <div>
      <button className={styles.btn}>Discover</button>
      </div>
      </div>
      <div className={styles.produit2}>
      <div className={styles.texte}>
        <p>PHANTOM Gold II <br></br> <span span className={styles.span}>Pure sound.</span> </p>
      </div>
      <div>
      <button className={styles.btn}>Discover</button>
      </div>
      </div>
      <div className={styles.produit3}>
      <div className={styles.texte}>
        <p>PHANTOM II Black <br></br> <span className={styles.span}>Deeply Nomadic.</span> </p>
      </div>
      <div>
      <button className={styles.btn}>Discover</button>
      </div>
      </div>
      <div className={styles.produit4}>
      <div className={styles.texte}>
        <p>PHANTOM II white <br></br> <span span className={styles.span}>Intensivly immersive.</span> </p>
      </div>
      <div>
      <button className={styles.btn}>Discover</button>
      </div>
      </div>
      </div>
      
      <footer className={styles.footer}>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Support</li>
          <li>Stores</li>
        </ul>
      </footer>
      </body>
  </>
  );
}

export default Home;






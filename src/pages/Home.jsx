import React from 'react';
import styles from './home.module.css';
import {Link} from 'react-router-dom'
import Carrousel from '../components/Carrousel.jsx'

function Home({categories, loading}){
  
     const loadedContent =  categories.map((item, i)=>{
                let lcCat = item.toLowerCase()
                lcCat= lcCat.replace(/'/, "")
                lcCat= lcCat.replace(/\s/, "")
               return (<Link to={'/products/' + item} key={i} className={`${styles.card} ${styles[lcCat]}`}>
                <h3>{item.toUpperCase()}</h3>
              </Link>)
            })

    console.log("CATEGORIES IN HOME", categories)

  return (
    <div className={styles.home}>
  <Carrousel />
      <div className={styles.cardsContainer}>
        {loading ? <h1>Loading content...</h1> : loadedContent}
        
      </div>
    </div>
  );
};

export default Home;

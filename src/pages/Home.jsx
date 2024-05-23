import React from 'react';
import styles from './home.module.css';
import {Link} from 'react-router-dom'
import Carrousel from '../components/Carrousel.jsx'

function Home({categories, loading}){
  
const loadedContent =  categories.map((item, i)=>{ //Save loaded in variable to easily render map
              const colorIndex = i + 1
               const style = { backgroundColor: `var(--color-${colorIndex})` } //sets background color for category card card
               return (<Link to={'/products/' + item} key={i} className={styles.card} style={style}>
                <h3>{item.toUpperCase()}</h3>
              </Link>)
            })


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

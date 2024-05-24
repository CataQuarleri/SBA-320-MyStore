import React from 'react'
import ProductCard from '../components/ProductCard.jsx'
import styles from './products.module.css'
import { useLocation } from 'react-router-dom'

function Search({filteredProducts, dispatch}) {

  const location = useLocation()
  const state = location?.state //getting the state from the navigate in NavBar - trying to figure out how to update in runtime and not one letter behind

  const loaded = filteredProducts.map(product => ( //map products to display cards
        <ProductCard key={product.id} product={product} dispatch={dispatch}/>
      ))
  return (
    <>
     <div className={`${styles.productTitle} ${styles.banner}`}>
         {(state?.query?.length === 0 || state?.query === undefined) ? "Waiting for your search" : `Searching for: ${state?.query}`} 
      </div>
      <div className={styles.productContainer}>  
          {loaded}
      </div>
    </>
        )
}

export default Search
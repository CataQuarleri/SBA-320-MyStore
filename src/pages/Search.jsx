import React from 'react'
import ProductCard from '../components/ProductCard.jsx'
import styles from './products.module.css'

function Search({filteredProducts}) {
  const loaded = filteredProducts.map(product => ( //map products to display cards
        <ProductCard key={product.id} product={product} />
      ))
  return (
    <>
      <div className={styles.productContainer}>  
          {loaded}
      </div>
    </>
        )
}

export default Search
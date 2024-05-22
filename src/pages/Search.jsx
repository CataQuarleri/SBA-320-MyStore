import React from 'react'
import ProductCard from '../components/ProductCard.jsx'
import styles from './products.module.css'
function Search({filteredProducts}) {
    console.log(filteredProducts)
    const loaded = filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))
        return (
          <>
              {/* <div className={`${styles.productTitle} ${styles[categoryStyle]}`}>Available {categoryName} products</div> */}
          <div className={styles.productContainer}>
              
          {loaded}
        </div>
        </>
        )
}

export default Search
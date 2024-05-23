import React, { useState } from 'react'
import styles from './productCard.module.css'
function ProductCard({product, dispatch}) {

  const [toggleDescription, setToggleDescription] = useState(false) //
const [clicked, setClicked] = useState(false)
    const shortDescription = product?.description?.substring(0, 50)

    function handleOnClick(){
      dispatch({type: "addToCart", payload: {product, amount: 1}})
      setClicked(true)
      setTimeout(()=>{
        setClicked(false)
      }, 2000)
    }
  return (
    <div className={styles.card} >
    <img src={product.images[0]} alt={product.title} className={styles.image} />
    <div className={styles.details}>
      <h4>{product.title}</h4>
      <p className={styles.price}>${product.price}</p>
      <div className={styles.descriptionContainer} onClick={()=> setToggleDescription(!toggleDescription)}><p className={styles.description}>{toggleDescription ? product.description : `${shortDescription}... `}</p></div>
      <div className={styles.rating}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < product?.rating ? styles.filledStar : styles.emptyStar}>★</span>
        ))}
      </div>
      <button className={styles.addToCartButton} onClick={()=> handleOnClick()}>{clicked ? "Added!":"Add to cart"}</button>
    </div>
  </div>
  )
}

export default ProductCard
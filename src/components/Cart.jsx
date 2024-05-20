import React from 'react'
import styles from './navbar.module.css';

function Cart({cartOpen, toggleCart, state}) {
  console.log(state)
  return (
   <>
         <div className={`${styles.cartMenu} ${cartOpen ? styles.cartMenuOpen : ''}`}>
            <h4>Your cart has {} items</h4>
        {/* Cart content goes here */}
      </div>
      {cartOpen && <div className={styles.overlay} onClick={toggleCart}></div>}
   </>
  )
}

export default Cart
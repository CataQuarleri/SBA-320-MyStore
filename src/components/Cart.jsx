import React from 'react'
import styles from './navbar.module.css';
import CartItem from './CartItem.jsx'

function Cart({cartOpen, toggleCart, state}) {
  return (
   <>
         <div className={`${styles.cartMenu} ${cartOpen ? styles.cartMenuOpen : ''}`}>
            <h4>Your cart has {state.length} items</h4>
        <CartItem />
      </div>
      {cartOpen && <div className={styles.overlay} onClick={toggleCart}></div>}
   </>
  )
}

export default Cart
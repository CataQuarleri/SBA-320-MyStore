import React from 'react'
import styles from './navbar.module.css';
import CartItem from './CartItem.jsx'

function Cart({cartOpen, toggleCart, state, dispatch}) {
  console.log("STATE", state)
  return (
    <>
    <div className={`${styles.cartMenu} ${cartOpen ? styles.cartMenuOpen : ''}`}>
    <h4>Your cart has {state.length} items</h4>
    {state.map((item, index) => (
      <CartItem key={index} item={item} dispatch={dispatch}/>
    ))}
  </div>
  {cartOpen && <div className={styles.overlay} onClick={toggleCart}></div>}
</>
  )
}

export default Cart
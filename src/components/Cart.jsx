import { useState, useEffect } from 'react'
import styles from './navbar.module.css';
import CartItem from './CartItem.jsx'

function Cart({cartOpen, toggleCart, state, dispatch}) {
  let [total, setTotal] = useState(0)
  useEffect(()=>{
    let totalAmount = state.reduce((_acc, item) => {
      return _acc += (item.product.price * item.amount)
    }, 0)
    let price = (Math.round(totalAmount * 100) / 100).toFixed(2);
    setTotal(price)
  }, [state])
  return (
    <>
    <div className={`${styles.cartMenu} ${cartOpen ? styles.cartMenuOpen : ''}`}>
    <h4>Your cart has {state.length} items</h4>
    {state.map((item, index) => (
      <CartItem key={index} item={item} dispatch={dispatch}/>
    ))}
  <p>Your total: {total}</p>
  </div>
  {cartOpen && <div className={styles.overlay} onClick={toggleCart}></div>}
</>
  )
}

export default Cart
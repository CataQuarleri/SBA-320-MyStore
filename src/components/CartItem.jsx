import styles from './navbar.module.css'

function CartItem({item}) {
  return (
    <div className={styles.cartItem}>
      <div>{item.title}</div>
      <div>{item.price}</div>
      <div className={styles.cartItemActions}>
        <span onClick={()=>{}}>−</span>
        <span>{item.amount}</span>
        <span onClick={()=>{}}>+</span>
        <button onClick={()=>{}}>Remove</button>
      </div>
    </div>
  )
}

export default CartItem
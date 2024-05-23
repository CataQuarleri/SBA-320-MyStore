import styles from './navbar.module.css'

function CartItem({item, dispatch}) {
//all the dispatch functions are within the button line on the onClick events
  return (
    <>
      <div style={{color: 'white'}}>
        {item.product.title}
      </div>
      <div className={styles.cartItem}>
        <img style={{maxWidth: '100px'}} src={item.product.thumbnail} alt={item.product.title} />
        <div>{item.product.price}</div>
        <div className={styles.cartItemActions}>
          <span onClick={()=>{dispatch({type: "restOneOfItem", payload: {product: item.product, amount: item.amount }})}}>−</span>
          <span>{item.amount}</span>
          <span onClick={()=>{dispatch({type: "addOneOfItem", payload: {product: item.product, amount: item.amount }})}}>+</span>
          <button onClick={()=>{dispatch({type: "removeFromCart", payload: {product: item.product}})}}>Remove</button>
        </div>
      </div>
    </>
  )
}

export default CartItem
import {useParams} from 'react-router-dom'
import styles from './products.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard.jsx'

const BASE_URL = 'https://dummyjson.com/products/category'

function Products({dispatch}) {
const [products, setProducts]=useState([]) //saves products from category that comes from params
const [loading, setLoading]=useState(true) //manages loading messages

let {category} = useParams() //comes from url
let categoryName = category.charAt(0).toUpperCase() + category.slice(1) //first letter to upper case

useEffect(()=>{ //triggered when params change
  setLoading(true)
    async function handleLoadProducts(){ //fetches products from API
        try {
            let response = await axios.get(`${BASE_URL}/${category}`)
            if(response.data.products){
              // console.log(response.data.products)
               return  setProducts(response.data.products)
            }
        } catch (error) {
            console.log("ERROR LOADING PRODUCTS: ", error)
        }
    }
    handleLoadProducts()
    if(handleLoadProducts){ //confirms products loaded to set loading to false
      setLoading(false)
    }
}, [category])

function loadedProducts(){ //maps products to render and sets error message in case there are no products in category
  if(products.length === 0){
    return <h2 style={{color: 'black'}}>No products in this category</h2> 
  }else {
   return products.map(product => {
      return <ProductCard key={product.id} product={product} dispatch={dispatch}/>
    })
  }
}

  return (
    <>
      <div className={`${styles.productTitle} ${styles.banner}`}>
        Available {categoryName} products
      </div>
      <div className={styles.productContainer}>
          {loading ? <h1>Loading products...</h1> : loadedProducts()}
      </div>
    </>
  )
}

export default Products
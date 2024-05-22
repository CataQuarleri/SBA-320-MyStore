import {useParams} from 'react-router-dom'
import styles from './products.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard.jsx'

const BASE_URL = 'https://dummyjson.com/products/category'

function Products() {

    const [products, setProducts]=useState([])
    const [loading, setLoading]=useState(true)

    let {category} = useParams() 

    let categoryStyle = category.replace(/'/, "")
    categoryStyle = categoryStyle.replace(/\s/, "") //replacing apostrophe and whitespace to fit style name

    let categoryName = category.charAt(0).toUpperCase() + category.slice(1) //first letter to upper case


useEffect(()=>{

  setLoading(true)
    async function handleLoadProducts(){
        try {
            let response = await axios.get(`${BASE_URL}/${category}`)
            if(response.data.products){
               return  setProducts(response.data.products)
            }
        } catch (error) {
            console.log("ERROR LOADING PRODUCTS: ", error)
        }
    }
    handleLoadProducts()
    if(handleLoadProducts){
      setLoading(false)
    }
}, [category])

const loaded = products.map(product => (
  <ProductCard key={product.id} product={product} />
))
  return (
    <>
        <div className={`${styles.productTitle} ${styles.banner}`}>Available {categoryName} products</div>
    <div className={styles.productContainer}>
        
    {loading ? <h1>Loading products...</h1> : loaded}
  </div>
  </>
  )
}

export default Products
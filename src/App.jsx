import './App.css'

//Functionality
import axios from 'axios'
import {Routes, Route} from 'react-router-dom'
import { useEffect, useReducer, useState} from 'react'
import {useImmerReducer} from 'use-immer'
import reducer from './utilities/reducer.js'

//Components & Pages
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import SignUp from './pages/SignUp.jsx'
import LogIn from './pages/LogIn.jsx'
import Products from './pages/Products.jsx'
import Search from './pages/Search.jsx'

const BASE_URL = 'https://dummyjson.com/products/'
const initialState = []
function App() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [cart, dispatch] = useImmerReducer(reducer, initialState)
  async function handleSetCategories(){
    try{
      let response = await axios.get('https://dummyjson.com/products/category-list')
      if(response.data){
        let catData = response.data
        return setCategories(catData)
      }
    }catch(err){
      console.log("ERROR:", err)
    }
  }

useEffect(()=>{
  handleSetCategories()
if(handleSetCategories){
 setLoading(false)
}
}, [])
  return (
    <>
  <Navbar categories={categories} dispatch={dispatch} state={cart} setFilteredProducts={setFilteredProducts}/>
  <Routes>
    <Route path="/" element={<Home categories={categories} loading={loading}/>}/>
    <Route path="/about-us" element={<AboutUs/>}/>
    <Route path="/products/:category" element={<Products dispatch={dispatch}/>} />
    <Route path="/search" element={<Search filteredProducts={filteredProducts} dispatch={dispatch}/>} />
    <Route path="/login" element={<LogIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
  </Routes>
    </>
  )
}

export default App

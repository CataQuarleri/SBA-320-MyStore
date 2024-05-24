import './App.css'

//TO-DO: Review and fix searchbar, which functionality to use, endpoint or filtering?

//Functionality
import axios from 'axios'
import {Routes, Route} from 'react-router-dom'
import { useEffect, useState} from 'react'
import {useImmerReducer} from 'use-immer'
import reducer from './utilities/reducer.js'

//Components & Pages
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
// import SignUp from './pages/SignUp.jsx'
// import LogIn from './pages/LogIn.jsx'
import Products from './pages/Products.jsx'
import Search from './pages/Search.jsx'

const initialState = []

function App() {
  const [categories, setCategories] = useState([]) //categories passed to homepage and navbar
  const [loading, setLoading] = useState(true) //loading status managed on useEffect
  const [filteredProducts, setFilteredProducts] = useState([]) //filtered products used in Navbar (searchbar) and Search component
  const [cart, dispatch] = useImmerReducer(reducer, initialState) //reducer used in Navbar (Cart and CartItem) and Products

  
  useEffect(()=>{ //to set initial categories used to load products by category 
  async function handleSetCategories(){ //async function to await category list
    try{
      let response = await axios.get('https://dummyjson.com/products/category-list')
      if(response.data){
        let catData = response.data.filter(p => p.toLowerCase() !== 'mobile-accessories') //mobile-accessories category images do not work
        return setCategories(catData)
      }
    }catch(err){
      console.log("ERROR:", err)
    }
  }
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
    {/* <Route path="/login" element={<LogIn/>}/> */} 
    {/* <Route path="/signup" element={<SignUp/>}/> */}
  </Routes>
    </>
  )
}

export default App

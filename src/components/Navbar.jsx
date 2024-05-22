import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import styles from './navbar.module.css';
import Cart from './Cart.jsx'
import axios from 'axios'


function Navbar({categories, state, setFilteredProducts}) {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([])
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate()
  const toggleCart = () => setCartOpen(!cartOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearch = (search)=>{
    setSearchInput(search)
   let filter = allProducts.filter(oneProduct => {
      return Object.values(oneProduct).join('').toLowerCase().includes(searchInput.toLowerCase())
    })
    setFilteredProducts(filter)
    navigate('/search')
  }
  useEffect(()=>{
    async function getProducts(){
      let response = await axios.get('https://dummyjson.com/products/search?q=' + searchInput)
      let products = response.data.products
      setAllProducts(products)
    }
    getProducts()
  }, [searchInput])

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>MyStore</div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>
        <div className={`${menuOpen ? styles.menu :  styles.displayNone} ${menuOpen ? styles.menuOpen : ''}`}>
          <input type="text" placeholder="Search..." className={styles.searchbar} onChange={(e)=>handleSearch(e.target.value)} />
          <div className={styles.searchBtn} name="search" onClick={()=>handleSearch()}>🔍</div>
          <Link to="/" className={styles.link}>HOME</Link>
          <Link to="/about-us" className={styles.link}>ABOUT US</Link>
          <div className={styles.dropdown}>
            <div className={styles.dropbtn}>PRODUCTS</div>
            <div className={styles.dropdownContent}>
                {categories.map((item, i) =>  <Link key={i} to={`/products/${item}`} className={styles.dropdownLink}>{item.toUpperCase()}</Link> )}
            </div>
          </div>
          <Link to="/login" className={styles.link}>LOGIN/SIGNUP</Link>
          <div className={styles.cartIcon} onClick={toggleCart}>🛒</div>
        </div>
      </nav>
    <Cart cartOpen={cartOpen} toggleCart={toggleCart} state={state}/>
    </>
  );
};

export default Navbar;

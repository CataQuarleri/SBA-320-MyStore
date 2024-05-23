import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import styles from './navbar.module.css';
import Cart from './Cart.jsx'
import axios from 'axios'


function Navbar({categories, state, setFilteredProducts, dispatch}) {
  const [cartOpen, setCartOpen] = useState(false); //manages Cart overlay
  const [menuOpen, setMenuOpen] = useState(false); //manages menu on mobile screen
  const [allProducts, setAllProducts] = useState([]) //all products in server to manage filter in Search
  const [searchInput, setSearchInput] = useState(""); //manages the searchBar with state for dependency in useEffect

  const navigate = useNavigate()
  const toggleCart = () => setCartOpen(!cartOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const logo = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F011%2F098%2F640%2Foriginal%2Fflat-shop-illustration-design-on-transparent-background-free-png.png&f=1&nofb=1&ipt=067bf498a7bda75a9380d31a57a5c2479f3ac7d3332d8178aa8c368a30c17eb8&ipo=images"

  const handleSearch = (search)=>{ //function that sets the filtered products and 
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
    // navigate('/search')
  }, [searchInput])

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">
          <img src={logo} alt="shop logo" className={styles.logo} />
        </Link>
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>
        <div className={`${menuOpen ? styles.menu :  styles.displayNone} ${menuOpen ? styles.menuOpen : ''}`}>
          <input type="text" placeholder="Search..." className={styles.searchbar} onChange={(e)=>handleSearch(e.target.value)} />
          <Link to="/" className={styles.link}>HOME</Link>
          <Link to="/about-us" className={styles.link}>ABOUT US</Link>
          <div className={styles.dropdown}>
            <div className={styles.dropbtn}>PRODUCTS</div>
            <div className={styles.dropdownContent}>
                {categories.map((item, i) =>  <Link key={i} to={`/products/${item}`} className={styles.dropdownLink}>{item?.toUpperCase()}</Link> )}
            </div>
          </div>
          <Link to="/login" className={styles.link}>LOGIN/SIGNUP</Link>
          <div className={styles.cartIcon} onClick={toggleCart}>🛒</div>
        </div>
      </nav>
    <Cart cartOpen={cartOpen} toggleCart={toggleCart} state={state} dispatch={dispatch}/>
    </>
  );
};

export default Navbar;

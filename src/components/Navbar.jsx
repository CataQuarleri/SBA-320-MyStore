import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import styles from './navbar.module.css';
import Cart from './Cart.jsx'
function Navbar({categories}) {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleCart = () => setCartOpen(!cartOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>MyStore</div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>
        <div className={`${menuOpen ? styles.menu :  styles.displayNone} ${menuOpen ? styles.menuOpen : ''}`}>
          <input type="text" placeholder="Search..." className={styles.searchbar} />
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
    <Cart cartOpen={cartOpen} toggleCart={toggleCart}/>
    </>
  );
};

export default Navbar;

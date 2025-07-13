import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from './../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from './../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const scrollToHeader = () => {
    setMenu('home');
    const header = document.getElementById("header");
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
    setMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchText.trim())}`);
      setSearchText('');
      setMenuOpen(false);
    }
  };

  // Prevent background scroll when menu is open (mobile)
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className='navbar' role="navigation" aria-label="Main navigation">
      <div onClick={scrollToHeader} className="navbar-logo" tabIndex={0} aria-label="Go to home" role="button">
        <img src={assets.logo} alt="FoodExpress Logo" className='logo' />
      </div>

      <ul className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
        <li>
          <a onClick={scrollToHeader} className={menu === 'home' ? 'active' : ''} tabIndex={0}>home</a>
        </li>
        <li>
          <a href='#explore-menu' onClick={() => { setMenu('menu'); setMenuOpen(false); }} className={menu === 'menu' ? 'active' : ''} tabIndex={0}>menu</a>
        </li>
        <li>
          <a href='#footer' onClick={() => { setMenu('contact-us'); setMenuOpen(false); }} className={menu === 'contact-us' ? 'active' : ''} tabIndex={0}>contact us</a>
        </li>
      </ul>

      <div className="navbar-right">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className='navbar-search-bar' role="search">
          <input
            type="text"
            placeholder="Search food..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            aria-label="Search food"
          />
          <button type="submit" aria-label="Search">
            <img src={assets.search_icon} alt="Search" className='icon' />
          </button>
        </form>

        <div className="navbar-cart">
          <Link to='/cart' aria-label="View cart">
            <img src={assets.basket_icon} alt="Cart" className='icon' />
          </Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)} className="navbar-signin-btn">sign in</button>
        ) : (
          <div className='navbar-profile' tabIndex={0} aria-haspopup="true">
            <img src={assets.profile_icon} alt="Profile" className='icon' />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        )}

        <button
          className="hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

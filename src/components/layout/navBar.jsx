import React, { useState } from 'react';
import '../../assets/styles/navBar.css'; // Make sure this path is correct

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar-container" role="navigation" aria-label="Main navigation">
      <div className="navbar-list">
        {/* Logo */}
        <div className="navbar-section logo">
          <a href="#">InvoPro</a>
        </div>

        {/* Search Bar */}
        <div className="navbar-section search-bar">
          <form>
            <input type="search" aria-label="Search for products" placeholder="Search..." />
            <input type="submit" value="Search" />
          </form>
        </div>

        {/* Navbar Links */}
        <div className={`navbar-section navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#">Dashboard</a>
          <a href="#">Invoices</a>
          <a href="#">Sign In / Sign Up</a>
        </div>

        {/* Hamburger Menu */}
        <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
         onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;

import React, { useState } from 'react';

function ReactNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="navbar-link">About</a>
        </li>
        <li className="navbar-item">
          <a href="/services" className="navbar-link">Services</a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">Contact</a>
        </li>
      </ul>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-icon"></span>
      </button>
    </nav>
  );
}

export default ReactNavbar;





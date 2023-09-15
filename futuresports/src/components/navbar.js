import React from 'react';
import './navbar.css'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => scrollToSection('welcome')}>Welcome</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('events')}>Events</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('about')}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

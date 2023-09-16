import React, { useState } from "react";
import "./navbar.css";
import SearchBar from "./searchbar";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchitems = ["welcome", "about", "events", "contact"];

  const handleSearch = (query) => {
    const q = query.toLowerCase();
    const results = [];

    for (const item of searchitems) {
      if (item.includes(q)) {
        results.push(item);
      }
    }
    
    setSearchResults(results);
    setTimeout(() => {
      setShowResults(true);
    }, 1000); //
  };

  const handleClose = () => {
    setShowResults(false);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => scrollToSection("welcome")}>Welcome</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("events")}>Events</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </li>
        </ul>
        <div>
          <SearchBar onSearch={handleSearch} />
        </div>
      </nav>
      <div>
      {showResults && (
        <div>
          <button onClick={handleClose} className="close-button">
            &#10006; 
          </button>
          <ul className="searchresults">
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import PhotoCaraousel from './components/photocarousel';
import Events from './components/events';
import Media from './components/media';


function App() {

  return (
    <div className="App">
      <Navbar />
      <PhotoCaraousel/>
      <div>
        <h1 id="welcome" style={{marginTop:'100px'}}>Future Sports</h1>
        <p>Row your way, every day, with Future Sports.</p>
        <Events/>
        <Media/>
     
        <h2 id="about">About</h2>
        <p>This is the content of Section 3.</p>

        <h2 id="contact">Contacts</h2>
        <p>This is the content of Section 3.</p>
        
      </div>
    </div>
  );
}

export default App;

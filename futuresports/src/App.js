import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import PhotoCaraousel from './components/photocarousel';


function App() {

  return (
    <div className="App">
      <Navbar />
      <PhotoCaraousel/>
      <div>
        <h1 id="welcome">Future Sports</h1>
        <p>Row your way, every day, with Future Sports.</p>
        
        <h2 id="events">Events</h2>
     
        <h2 id="about">About</h2>
        <p>This is the content of Section 3.</p>

        <h2 id="contact">Contacts</h2>
        <p>This is the content of Section 3.</p>
        
      </div>
    </div>
  );
}

export default App;

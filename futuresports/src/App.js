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
        
        <h1 id="events">Events</h1>
     
        <h1 id="about">Section 3</h1>
        <p>This is the content of Section 3.</p>

        <h1 id="contact">Section 3</h1>
        <p>This is the content of Section 3.</p>
        
      </div>
    </div>
  );
}

export default App;

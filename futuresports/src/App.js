import React from "react";
import Navbar from "./components/navbar";
import "./app.css";
import PhotoCaraousel from "./components/photocarousel";
import Events from "./components/events";
import Media from "./components/media";
import ContactForm from "./components/contact";
import ErrorBoundary from './ErrorBoundary';

function App() {
  const aboutMsg = `Whether youre an experienced rower seeking a new 
  imaginary challenge or a complete novice eager to dip your oars into the waters of
  imagination, Future Sports Rowing Club welcomes you. We organize a
  variety of events throughout the year, from friendly inter-club
  regattas to workshops led by renowned rowing experts. These gatherings
  not only enhance our members skills but also provide opportunities
  for them to connect with fellow enthusiasts who share their passion.
  Join us in creating a shared narrative of friendship, personal growth,
  and the sheer joy of rowing across imaginary horizons. Your adventure
  awaits on the waters of Future Sports.`


  return (
    <div className="App">
      <Navbar />
      <PhotoCaraousel />
      <div>
        <h1 id="welcome" style={{ marginTop: "100px" }}>
          Future Sports
        </h1>
        <p>Row your way, every day, with Future Sports.</p>
        <Events />
        <ErrorBoundary>
        <Media />
        </ErrorBoundary>
       

        <h2 id="about" style={{marginTop:'100px'}}>About</h2>
        <p id="aboutp" style={{marginBottom:'100px'}}>
          {aboutMsg}
        </p>

        <ContactForm />
      </div>
      <footer>
        <p>	&copy; Future Sports 2023</p>
        <ul>
            <li><button className="privacy" id="privacy">Privacy Statement</button></li>
            <li><button className="contact" id="contact">Contact</button></li>
            <li><button className="tac" id="tac">Terms and Conditions</button></li>
        </ul>
    </footer>
    </div>
  );
}

export default App;

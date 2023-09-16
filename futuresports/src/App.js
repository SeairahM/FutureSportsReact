import React from "react";
import Navbar from "./components/navbar";
import "./App.css";
import PhotoCaraousel from "./components/photocarousel";
import Events from "./components/events";
import Media from "./components/media";
import ContactForm from "./components/contact";

function App() {
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
        <Media />

        <h2 id="about">About</h2>
        <p id="aboutp">
          Whether you're an experienced rower seeking a new imaginary challenge
          or a complete novice eager to dip your oars into the waters of
          imagination, Future Sports Rowing Club welcomes you. We organize a
          variety of events throughout the year, from friendly inter-club
          regattas to workshops led by renowned rowing experts. These gatherings
          not only enhance our members' skills but also provide opportunities
          for them to connect with fellow enthusiasts who share their passion.
          Join us in creating a shared narrative of friendship, personal growth,
          and the sheer joy of rowing across imaginary horizons. Your adventure
          awaits on the waters of Future Sports.{" "}
        </p>

        <ContactForm />
      </div>
    </div>
  );
}

export default App;

// App.jsx
import React from 'react';
import Benner from './components/Benner';
import Strength from './components/Strength';
import Customer from './components/Customer';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurStory from './components/OurStory';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Header />
      <Benner />
      <OurStory />
      <br />
      <Strength />
      <Customer />
      <Footer />

      <h3 style={{ textAlign: "center", marginTop: "20px" }}>Contact Us</h3>

      <Header />
      <Contact />
      <Footer />
    </>


  );
}

export default App;

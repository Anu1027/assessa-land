// App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import ContactPage from './components/ContactPage/ContactPage'; // Import the ContactPage component
import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation'; // Import the ScrollAnimation component

function App() {
 
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <ContactPage />
      <Footer />
      <ScrollAnimation />
    </div>
  );
}

export default App;

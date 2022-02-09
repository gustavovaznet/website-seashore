//APP

//IMPORTING
import React from 'react';
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import CardSection from './components/CardSection'
import WhatWeOffer from './components/WhatWeOffer';
import ContactUs from './components/ContactUs'
import Featured from './components/Featured'
import './App.css';

//APP
function App() {
  return (
    <div>    
      <NavigationBar />
      <HeroSection />
      <CardSection />
      <WhatWeOffer />
      <Featured />
      <ContactUs />
    </div>
  );
}

export default App;

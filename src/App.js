import React, { useState } from 'react';
import { Header } from './components/Header'; 
import { HeroSection } from './components/HeroSection'; 
import ContactPage from './components/ContactPage'; 
import ServicesPage from './components/ServicesPage'; 
import { Element } from 'react-scroll'; 
import Footer from './components/Footer'; 
import '@fontsource/poppins'; // Defaults to weight 400


function App() {
  const [language, setLanguage] = useState('English'); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
    
      <Header language={language} onLanguageChange={handleLanguageChange} />

     
      <Element name="about">
        <HeroSection language={language} />
      </Element>

      <Element name="services">
        <ServicesPage language={language} /> 
      </Element>

      <Element name="contact">
        <ContactPage language={language} /> 
      </Element>
      
      <Footer />
    </div>
  );
}

export default App;

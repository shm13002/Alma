import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductDetails from './components/ProductDetails';
import IngredientTransparency from './components/IngredientTransparency';
import Ingredients from './components/Ingredients';
import GutHealthTimeline from './components/GutHealthTimeline';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProductDetails />
              <IngredientTransparency />
              <Ingredients />
              <GutHealthTimeline />
              <SocialProof />
              <FAQ />
              <EmailSignup />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
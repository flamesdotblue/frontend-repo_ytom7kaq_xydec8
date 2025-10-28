import React from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Categories />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;

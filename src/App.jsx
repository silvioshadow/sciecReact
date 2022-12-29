import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Banner from './componentes/Banner';
import Card1 from './componentes/card1a';
import Card2 from './componentes/paquetes';
import Card3 from './componentes/card2'
import Pie from './componentes/footer';

function App() {
  return (
    <div className="container">
      <Header/>
      <Banner/>
      <div className="Cards1">
        <Card1/>
        <Card2/>
        <Card3/>
      </div>
      <Pie/>
    </div>
  );
}

export default App;

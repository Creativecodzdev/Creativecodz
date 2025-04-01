import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavComp from './Components/NavComp';
import ContentComp from './Components/ContentComp';
import FooterComp from './Components/FooterComp';
// import './assets/css/style.css'

function App() {
  return (
    <div className="App">
      <NavComp/>
      <ContentComp/>
      <FooterComp/>
    </div>
  );
}

export default App;

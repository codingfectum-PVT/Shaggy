import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Stake from './pages/stake';
import LandingPage from './pages/landingpage';
import Home from './pages/home';
import About from './pages/about';
import Tokenomics from './pages/tokenomics';
import HowToBuy from './pages/howtobuy';
import React from 'react';
// import 'react-fullpage/build/react-fullpage.css';
function App() {
  const options = {
    anchors: ['Home', 'About', 'Tokenomics', 'HowToBuy'],
    navigation: true,
    navigationPosition: 'left',
    responsiveWidth: 768,
  };
  return (
    <Router>
      <Routes>
        <Route exact  path="/" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/farm" element={<Stake />} />
        </Routes>
    </Router>
  );
}

export default App;

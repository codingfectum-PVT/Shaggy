
import '../App.css';
import DrawerAppBar from '../components/nav';
import Home from '../pages/home';
import About from '../pages/about';
import Tokenomics from '../pages/tokenomics';
import HowToBuy from '../pages/howtobuy';
import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
// import 'react-fullpage/build/react-fullpage.css';
function App() {
  const options = {
    anchors: ['Home', 'About', 'Tokenomics', 'HowToBuy'],
    navigation: true,
    navigationPosition: 'left',
    responsiveWidth: 768,
  };
  return (
    <div>
      <SectionsContainer {...options} style={{color:'red !important'}}>
      <Section>
      <DrawerAppBar />
      <Home />
      </Section>

      <Section>
      <DrawerAppBar />
      <About />
      </Section>

      <Section>
      <DrawerAppBar />
      <Tokenomics />
      </Section>

      <Section>
      <DrawerAppBar />
      <HowToBuy />
      </Section>

      <Section>
      <DrawerAppBar />
     <HowToBuy />
      </Section>
    
    </SectionsContainer>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Para from './Components/Para';
import Paragraph from './Components/Para';
import Foot from './Components/Footer';
{/* the following child components are inserted into the major components App */}
function App() {
  return (
    <div className="">
      <Header />
      <Nav />
      {/*Add a "name" attribute was added to the Paragraph and Foot component */}
      <Paragraph name="Hyperion"/>
      <Foot name="Wonda Wasilua Joel" />
    </div>
 
  );
}

export default App;

import React from 'react';
import './App.css';
import Aux from './Auxilliary';
import useLockBodyScroll from './useLockBodyScroll'
import Content from './Content'

function App() {
  useLockBodyScroll()
  return (
    <Aux>
    <div className="App">
  <Content></Content>
    </div>
    
    </Aux>
  );
}

export default App;

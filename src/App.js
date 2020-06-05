import React from 'react';
import './App.css';
import Aux from './Auxilliary';
import useLockBodyScroll from './useLockBodyScroll'
import Content from './Content'
import logo from './assets/images/ICON.png'

function App() {
  useLockBodyScroll()
  return (
    <Aux>
    <div className="App">
    <img className='image'src={logo} alt=''></img>
  <Content></Content>
    </div>
    
    </Aux>
  );
}

export default App;

import React from 'react';
import App from './App';
import Navigation from './Navigation'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import InfoHolder from './InfoHolder'
import useLockBodyScroll from './useLockBodyScroll'
import Footer from './footer'
function Routing (){
    useLockBodyScroll()
    return(
    <Router>
      <Navigation>
      <div>
        <Route  exact path='/' component={App}></Route>
        <Route exact path='/InfoHolder' component={InfoHolder}></Route>
      </div>
      <Footer></Footer>
      </Navigation>
    </Router>
    )
}
export default Routing;
import React from 'react';
import App from './App';
import Navigation from './Navigation'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import OurTeam from './OurTeam'
import Partners from './Partners'
import AboutUs from './AboutUs'
import useLockBodyScroll from './useLockBodyScroll'
import Footer from './footer'
import SN from './assets/images/SN.mp4'

const Routing = () => {
    useLockBodyScroll()
    return(
      <Router>
        <video autoPlay muted loop className = 'SNMP4'> <source src={SN} type='video/mp4'></source></video>
        <Navigation>
        <div>
          <Route  exact path='/' component={App}></Route>
          <Route exact path='/OurTeam' component={OurTeam}></Route>
          <Route exact path='/Partners' component={Partners}></Route>
          <Route exact path='/AboutUs' component={AboutUs}></Route>
        </div>
        <Footer></Footer>
        </Navigation>
      </Router>
    )
}
export default Routing;
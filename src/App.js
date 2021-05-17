import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar} from './components';
import Homepage from './components/Homepage';
import Aboutus from './components/Aboutus';

import ContactUs from "./components/ContactUs/ContactUs";
 import Footer from "./components/Footer/Footer";
import Reservation from './components/Reservation/Reservation';
 

function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
      
      <Navbar />
      <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/aboutus' component={Aboutus} />
              {/* 
              <Route path='/menu' component={Menu} />
              <Route path='/contact' component={Contact} />
              <Route path='/reservation' component={Reservation} /> */}
          </Switch>
      
         
    </Router>
    <Reservation/>
    {/* <ContactUs/> */}
   
      <Footer/>
    </>
  );
}

export default App;


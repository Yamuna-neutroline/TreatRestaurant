import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer, Feedback } from './components';
import Homepage from './components/Homepage';
import Aboutus from './components/InfoSection/Aboutus';

const App = () => {
  return (
    <>
    <Router>
      <GlobalStyle />
      
      <Navbar />
      <Switch>
              <Route exact path='/' component={Homepage} />

              {/* <Route path='/aboutus' component={Aboutus} />  */}
              {/* 
              <Route path='/menu' component={Menu} />
              <Route path='/contact' component={Contact} />
              <Route path='/reservation' component={Reservation} /> */}
          </Switch>
          <Aboutus/>
          <Feedback/>
     </Router>
</>
  );
};

export default App;


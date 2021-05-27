import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import Aboutus from "./components/InfoSection/Aboutus";
import LandingPage from "./containers/LandingPage";
import Menu from "./components/Menu/Menu";
import ContactUs from "./components/ContactUs/ContactUs"
import Reservation from "./components/Reservation/Reservation"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (

    <div>
      <Router>
        <GlobalStyle />
        <Navbar />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/menu" component={Menu} />
          <Route path='/contact' component={ContactUs} />
              <Route path='/reservation' component={Reservation} />
        </Switch>
        {/* <Footer/> */}
      </Router>

    </div>
  );
};

export default App;
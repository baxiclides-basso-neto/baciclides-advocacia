import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/sobre" component={AboutPage} />
        <Route path="/contato" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
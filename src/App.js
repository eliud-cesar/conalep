// General
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styles
import './styles/StylesEDteam.scss';
import './styles/styles.css'

// Components Fixeds
import Header from './Components/Header';
import Footer from './Components/Footer';

// Pages
import Master from './Pages/Master.jsx'
import Infomration from './Pages/Information';
import Contacto from './Pages/Contacto';
import Conocer from './Pages/Conocer';

// Page Not Found
import PageNotFound from './Pages/PageNotFound';

const App = () => (
  <Router>

    < Header />

    <Switch>
      <Route path="/" exact component={ Master } />
      <Route path="/informacion" component={ Infomration } />
      <Route path="/contacto" component={ Contacto } />
      <Route path="/conocenos" component={ Conocer } />

      <Route component={ PageNotFound } />
    </Switch>

    < Footer />

  </Router>
)

export default App;

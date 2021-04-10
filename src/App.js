// General
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styles
import './styles/StylesEDteam.scss';
import './styles/styles.css'
import './styles/loader.css'

// Components Fixeds
import Header from './Components/Header';
import Footer from './Components/Footer';

// Pages
import Master from './Pages/Master.jsx'
import Infomration from './Pages/Information';
import Carreras from './Pages/Carreras';
import Conocer from './Pages/Conocer';
import Contacto from './Pages/Contacto';
import CarrerasAcademia from './Pages/CarrerasAcademia';

// Page Not Found
import PageNotFound from './Pages/PageNotFound';

// Testing
import Loader from './test/Loader';


const App = () => (
  <Router>

    < Header />

    <Switch>
      <Route path="/" exact component={ Master } />
      <Route path="/informacion" component={ Infomration } />
      <Route path="/contacto" component={ Contacto } />
      <Route path="/conocenos" component={ Conocer } />
      <Route path="/academia" component={ Carreras } />
      <Route path="/carreras/:carrera" component={ CarrerasAcademia } />
      
      {/* TESTING */}
      <Route path="/loading" component={Loader} />

      <Route component={ PageNotFound } />

    </Switch>

    < Footer />

  </Router>
)

export default App;

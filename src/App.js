import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import './styles/StylesEDteam.scss';
import './styles/styles.css'
import Master from './Pages/Master.jsx'
import Footer from './Components/Footer';

const App = () => (
  <Router>

    < Header />

    <Switch>
      <Route path="/" exact component={ Master } />
    </Switch>

    < Footer />

  </Router>
)

export default App;

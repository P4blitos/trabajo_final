import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './Inicio';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
      </Switch>
    </Router>
  );
}

export default App;
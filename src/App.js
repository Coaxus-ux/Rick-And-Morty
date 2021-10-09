import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AllCharactersProvider from './context/AllCharactersContext';
import UniqueCharactersProvider from './context/UniqueCharacter'
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';

function App() {
  return (

    <AllCharactersProvider>
      <UniqueCharactersProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Characters} />
            <Route path="/episodes" component={Episodes} />
            <Route path="/locations" component={Locations} />
          </Switch>
        </Router>
      </UniqueCharactersProvider>
    </AllCharactersProvider>
  );
}
export default App;

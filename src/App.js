import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AllCharactersProvider from './context/AllCharactersContext';
import UniqueCharactersProvider from './context/UniqueCharacter';
import CharacterInfoProvider from './context/CharacterInfoContext';
import LocationsProvider from './context/LocationsContext';
import UniqueLocationProvider from './context/UniqueLocationContext';


import Characters from './pages/Characters';
import Locations from './pages/Locations';
import CharacterInfo from './pages/CharacterInfo';
import LocationsResidents from './pages/LocationsResidents';

import Loading from './components/Utilities/Loading';


function App() {
  const [isLoad, setIsLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 3000)
  }, [])
  return (

    <AllCharactersProvider>
      <UniqueCharactersProvider>
        <CharacterInfoProvider>
          <LocationsProvider>
            <UniqueLocationProvider>
              {isLoad ? (<Loading />) :
                (
                  <Router>
                    <Switch>
                      <Route exact path="/" component={Characters} />
                      <Route path="/character-info" component={CharacterInfo} />
                      <Route path="/locations" component={Locations} />
                      <Route path="/locations-residents" component={LocationsResidents} />

                    </Switch>
                  </Router>
                )

              }
            </UniqueLocationProvider>
          </LocationsProvider>
        </CharacterInfoProvider>
      </UniqueCharactersProvider>
    </AllCharactersProvider>
  );
}
export default App;

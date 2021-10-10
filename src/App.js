import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AllCharactersProvider from './context/AllCharactersContext';
import UniqueCharactersProvider from './context/UniqueCharacter';
import CharacterInfoProvider from './context/CharacterInfoContext';
import LocationsProvider from './context/LocationsContext';

import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import CharacterInfo from './pages/CharacterInfo';
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
            {isLoad ? (<Loading />) :
              (
                <Router>
                  <Switch>
                    <Route exact path="/" component={Characters} />
                    <Route path="/episodes" component={Episodes} />
                    <Route path="/locations" component={Locations} />
                    <Route path="/character-info" component={CharacterInfo} />
                  </Switch>
                </Router>
              )

            }
          </LocationsProvider>
        </CharacterInfoProvider>
      </UniqueCharactersProvider>
    </AllCharactersProvider>
  );
}
export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Categories from './components/Categories';
import Jokes from './components/Jokes';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Categories}></Route>
            <Route path="/:category/random" component={Jokes}></Route>
            <Route path="/random" component={Jokes}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

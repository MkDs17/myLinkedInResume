import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.scss';

import Home from '../Home';
import Header from '../Header';
import First from '../Page/First';
import Second from '../Page/Second';
import Third from '../Page/Third';

function App() {
  return (
    <div id="app">
      <Header />
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/first-page"><First /></Route>
        <Route path="/second-page"><Second /></Route>
        <Route path="/third-page"><Third /></Route>
      </Switch>

    </div>
  );
}

export default App;

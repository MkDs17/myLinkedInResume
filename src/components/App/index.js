import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.scss';

import Home from '../Home';
import Header from '../Header';

function App() {
  return (
    <div id="app">
      <Header />
    </div>
  );
}

export default App;
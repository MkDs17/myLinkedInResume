import React from 'react';
import ReactNotification from 'react-notifications-component';

import './app.scss';

import Nav from '../Nav';
import Feed from '../Feed';

function App() {
  return (
    <div id="app">
      <ReactNotification />
      <Nav />
      <Feed />
    </div>
  );
}

export default App;

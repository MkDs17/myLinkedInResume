import React, { useEffect } from 'react';
import { IoIosArrowRoundDown } from 'react-icons/io';
import ReactNotification from 'react-notifications-component';

import './app.scss';

import Nav from '../Nav';
import Feed from '../Feed';

function App() {
  return (
    <div id="app">
      <ReactNotification />
      <Nav />
      <h1>Linkedin Feed</h1>
      <Feed />
      {/* <IoIosArrowRoundDown className="feed-button shadow-xl" type="button" label="Accéder au bas de la page" onClick={() => accessToTheTop()} /> */}
    </div>
  );
}

export default App;

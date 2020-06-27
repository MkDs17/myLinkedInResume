import React from 'react';

import './header.scss';

import Nav from './Nav';
import Feed from './Feed';

const Header = () => {
  return (
    <div id="header">
      <Nav />
      <Feed />
    </div>
  );
};

export default Header;

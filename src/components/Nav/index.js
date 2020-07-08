import React from 'react';

import './nav.scss';

const Nav = () => {
  return (
    <div id="nav">
      <nav className="flex items-center justify-between flex-wrap px-4 py-2 bg-white shadow">
        <div className="flex items-center text-white mr-6">
          <img className="fill-current h-8 mr-2" alt="logo mr-webdev" src="/src/public/assets/img/logo.png" />
        </div>
        <div className="flex items-center">
          <a href="https://cv.mr-webdev.com" target="_blank" rel="noreferrer" className="link-button px-4 py-2 mr-4 shadow-lg rounded-md font-semibold">Mon CV</a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

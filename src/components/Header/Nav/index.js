import React, {useState} from 'react';

import './nav.scss';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log('coucou');
    setShowMenu(!showMenu);
  };
  const downloadCV = () => {
    console.log('coucouCV');
  };

  return (
    <div id="nav">
      <nav className="flex items-center justify-between flex-wrap p-4 bg-white shadow">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="fill-current h-8 mr-2" alt="logo mr-webdev" src="/public/assets/img/logo.png" srcSet="/public/assets/img/logo.png" />
        </div>
        <div className="flex">
          <button onClick={downloadCV} type="button" className="px-6 mr-6 bg-purple-500 rounded-md">Mon CV</button>
          <button onClick={toggleMenu} type="button" className="flex items-center">
            <img
              className="fill-current h-12"
              alt="logo mr-webdev"
              src={`/public/assets/img/${showMenu ? 'avataaars.svg' : 'avataaars1.svg'}`}
              srcSet={`/public/assets/img/${showMenu ? 'avataaars.svg' : 'avataaars1.svg'}`}
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

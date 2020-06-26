import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';

import './header.scss';

import img from '../../../public/logo192.png';
import headerMenuData from '../../data/headerMenuData';

const Header = () => {
  const [activeItem, handleActiveItemClick] = useState('home');

  const handleItemClick = (e, { name }) => {
    handleActiveItemClick(name);
  };

  return (
    <div id="header">
      <Menu>
        <NavLink to="/">
          <Menu.Item>
            Built with <Image className="menu-logo" src={img} avatar />
          </Menu.Item>
        </NavLink>

        {headerMenuData.map((menu) => (
          <Menu.Item
            as={NavLink}
            name={menu.slug}
            active={activeItem === menu.slug}
            onClick={handleItemClick}
            position={menu.position}
            key={menu.slug}
            to={`/${menu.slug}`}
          >
            {menu.name}
          </Menu.Item>
        ))}

      </Menu>
    </div>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Image, Icon } from 'semantic-ui-react';

import './home.scss';

import homeSectionData from '../../data/homeSectionData';

const Home = () => {
  return (
    <div id="home">
      <div className="home-block">
        <div className="home-block-title">
          <h2>WELCOME ON MY SITE</h2>
          <h3>YOU'LL FIND EVERTHING YOU NEED</h3>
        </div>
        <div className="home-block-section">
          {homeSectionData.map((section) => (
            <>
              <Card>
                <Image src={`/public/assets/img/${section.img}.svg`} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{section.name}</Card.Header>
                  <Card.Description>
                    {section.desc}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <NavLink to={section.slug}>
                    <Icon name="arrow right" />
                    View more
                  </NavLink>
                </Card.Content>
              </Card>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

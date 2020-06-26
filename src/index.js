import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'src/styles/index.scss';

// External Lib
import 'semantic-ui-css/semantic.min.css';
import 'emoji-mart/css/emoji-mart.css';

import App from 'src/components/App';

const rootComponent = (
  <Router>
    <App />
  </Router>
);

const target = document.getElementById('root');

render(rootComponent, target);

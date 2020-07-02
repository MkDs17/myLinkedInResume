import React from 'react';
import PropTypes from 'prop-types';

import './feed.scss';

import data from '../../../data/feedData';

import Publication from './Publication';

const Feed = () => {
  return (
    <div id="feed">
      <div className="feed p-8 flex items-center justify-center">
        <div className="feed-publication flex">
          {data.map((publi) => (
            <div key={publi.id} className="publication bg-white mb-2 rounded-sm">
              <Publication publi={publi} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;

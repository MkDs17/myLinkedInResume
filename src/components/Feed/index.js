import React, { useEffect } from 'react';
import addNotification from '../../utils/addNotification';

import './feed.scss';

import data from '../../data/feedData';

import Publication from './Publication';

const Feed = () => {
  useEffect(() => {
    addNotification('welcome');

    setTimeout(()=>{
      addNotification('guide');
    }, 10000);
  }, []);

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

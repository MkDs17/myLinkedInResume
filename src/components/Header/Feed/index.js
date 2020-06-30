import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './feed.scss';

import data from '../../../data/feedData';

import Actions from './Publication/Actions';
import Author from './Publication/Author';
import Content from './Publication/Content';
import Image from './Publication/Image';
import SendingComment from './Publication/SendingComment';
import Stats from './Publication/Stats';
import Comment from './Publication/Comment';

const Feed = () => {
  const [viewMoreContent, setViewMoreContent] = useState(false);
  const [totalNotification, setTotalNotification] = useState('');

  return (
    <div id="feed">
      <div className="feed m-8 p-8 flex items-center justify-center">
        {data.map((publi) => (
          <div className="feed-publication flex">
            <div className="publication bg-white rounded-sm">

              <Author author={publi.author} />
              <Content content={publi.content} />
              <Image image={publi.img} />
              <Stats
                stats={publi.stats}
                viewMoreAction={setViewMoreContent}
                totalNotification={totalNotification}
                setTotalNotification={setTotalNotification}
              />
              <Actions
                viewMoreContent={viewMoreContent}
                viewMoreAction={setViewMoreContent}
                totalNotification={totalNotification}
                setTotalNotification={setTotalNotification}
              />
              { viewMoreContent && (
                <>
                  <SendingComment />
                  <Comment comments={publi.comments} />
                </>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;

import React, { useState } from 'react';

import './publication.scss';

import Actions from './Actions';
import Author from './Author';
import Content from './Content';
import Image from './Image';
import SendingComment from './SendingComment';
import Stats from './Stats';
import Comment from './Comment';

const Publication = ({ publi }) => {
  const [viewMoreContent, setViewMoreContent] = useState(false);
  const [totalNotification, setTotalNotification] = useState('');

  return (
    <div id="publication">
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
  );
};

export default Publication;

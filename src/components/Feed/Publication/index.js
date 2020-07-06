import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './publication.scss';

import Actions from './Actions';
import Author from './Author';
import Content from './Content';
import Image from './Image';
import SendingComment from './SendingComment';
import Stats from './Stats';
import Comment from './Comment';

import { countNotifs } from '../../../utils/funtions';

const Publication = ({ publi }) => {
  const [viewMoreContent, setViewMoreContent] = useState(false);
  const [totalNotification, setTotalNotification] = useState(0);
  const [commentsCounter, setCommentsCounter] = useState(0);

  useEffect(() => {
    const notifs = countNotifs(publi.stats.notifs.like, publi.stats.notifs.love, publi.stats.notifs.clap, publi.stats.notifs.idea, publi.stats.notifs.interest);
    setTotalNotification(notifs);
    setCommentsCounter(publi.comments.length);
  }, []);

  return (
    <div id="publication">
      <Author author={publi.author} />
      <Content content={publi.content} />
      <Image image={publi.img} />
      <Stats
        stats={publi.stats}
        viewMoreAction={setViewMoreContent}
        totalNotification={totalNotification}
        commentsCounter={commentsCounter}
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
          {publi.comments.map((comment) => (
            <div key={comment.id} className="publication-comments flex flex-col mb-4">
              <Comment comment={comment} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

Publication.propTypes = {
  publi: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape(),
    content: PropTypes.string.isRequired,
    img: PropTypes.string,
    stats: PropTypes.shape().isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape(),
    ),
  }).isRequired,
};

export default Publication;

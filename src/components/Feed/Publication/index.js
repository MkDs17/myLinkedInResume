import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
  const [totalNotification, setTotalNotification] = useState(0);

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

Publication.propTypes = {
  publi: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      connection_level: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      company: PropTypes.string,
      publish_date: PropTypes.string.isRequired,
    }),
    content: PropTypes.string.isRequired,
    img: PropTypes.string,
    stats: PropTypes.shape({
      counting_total_notifs: PropTypes.number.isRequired,
      counting_comments: PropTypes.number.isRequired,
      counting_views: PropTypes.number.isRequired,
      notifs: PropTypes.shape({
        likes: PropTypes.number.isRequired,
        love: PropTypes.number.isRequired,
        clap: PropTypes.number.isRequired,
        idea: PropTypes.number.isRequired,
        interesting: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        author_img: PropTypes.string.isRequired,
        author_connection_level: PropTypes.string.isRequired,
        author_job: PropTypes.string.isRequired,
        author_company: PropTypes.string.isRequired,
        publish_date: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        stats: PropTypes.shape({
          likes: PropTypes.number.isRequired,
        }).isRequired,
        subcomments: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
            author_img: PropTypes.string.isRequired,
            author_connection_level: PropTypes.string.isRequired,
            author_job: PropTypes.string.isRequired,
            author_company: PropTypes.string.isRequired,
            publish_date: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            stats: PropTypes.shape({
              likes: PropTypes.number.isRequired,
            }).isRequired,
          }),
        ),
      }),
    ),
  }).isRequired,
};

export default Publication;

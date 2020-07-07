import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './comment.scss';

import { calculateTimeBtwTwoDates, checkIfTextContainsLink } from '../../../../utils/funtions';

import SubComment from './SubComment';

const Comment = ({ comment }) => {
  const [maxSubComToShow, setMaxSubComToShow] = useState(2);
  const [subCommentsCount, setSubCommentCount] = useState('');
  const [subcommentsToShow, setSubmcommentsToShow] = useState([]);
  const [contentToShow, setcontentToShow] = useState(comment.content);
  const [excerpt, setExcerpt] = useState(false);

  // Ne se recharge pas, seulement au chargement du composant, mais pas a chaque modification du state
  useEffect(() => {
    if (comment.content.length >= 150) {
      setExcerpt(true);
    }
  }, []);

  useEffect(() => {
    if (comment.subcomments !== undefined) {
      const commentsNb = `${comment.subcomments.length} ${comment.subcomments.length <= 1 ? 'commentaire' : 'commentaires'}`;
      // Afficher le nombre de sous-commentaire
      setSubCommentCount(commentsNb);
      // Par défaut, n'afficher que deux sous-commentaires
      const subcommentsToShowArray = comment.subcomments.slice(0, maxSubComToShow);
      setSubmcommentsToShow(subcommentsToShowArray);
    }

    const excerptContent = () => {
      let p = '';
      p = comment.content.substring(0, 150);
      return p;
    };

    { excerpt === true ? setcontentToShow(() => excerptContent()) : setcontentToShow(comment.content) }
  }, [maxSubComToShow, excerpt]);

  const loadAllSubComments = () => {
    if (comment.subcomments !== undefined) {
      // Permettre l'affichage de tous les sous commentaires au click
      setMaxSubComToShow(comment.subcomments.length);
    }
  };

  return (
    <div key={comment.id} className="publication-comment flex mx-4 mt-1 mb-3">

      <div className="publication-comment-author-avatar">
        <img className="h-9 w-9 mr-2 object-cover rounded-full" alt="" src={comment.author_img} />
      </div>

      <div className="publication-comment-box flex flex-col w-full">
        <div className="publication-comment-content w-full px-3 py-2 flex flex-col">
          <div className="publication-comment-content-top flex justify-between">
            <div className="publication-comment-author">
              <div className="publication-comment-author-name">{comment.author} <span>• {comment.author_connection_level}</span></div>
              <div className="publication-comment-author-company">{comment.author_job} {comment.author_company !== null && `at ${comment.author_company}`}</div>
            </div>
            <div className="publication-comment-published-date flex">
              {calculateTimeBtwTwoDates(comment.publish_date)}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                <path d="M2 7h2v2H2V7zm5 2h2V7H7v2zm5-2v2h2V7h-2z" />
              </svg>
            </div>
          </div>
          <div className="publication-comment-content-text mt-3 mb-2">
            {checkIfTextContainsLink(contentToShow).map((text, i) => (
              <div key={i}>
                { text.type === 'text' && (
                  <span>
                    {text.text}
                    { excerpt === true
                      && <button className="publication-content-view-more focus:outline-none focus:shadow-outline-none ml-2" type="button" onClick={() => setExcerpt(!excerpt)}> ...voir plus </button>
                    }
                  </span>
                )}
                { text.type === 'link' && (<span><a href={text.text}>{text.text}</a></span>)}
              </div>
            ))}
          </div>
        </div>

        <div className="publication-comment-stats flex ml-3 mt-1">

          <div className="publication-comment-stats-like flex mr-3 items-center">
            <div className="publication-comment-stats-like-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                <path d="M11.6 7L9.7 3.8c-.3-.5-.5-1.1-.7-1.7L8.8 1H7c-1.1 0-2 .9-2 2v.4c0 .6.1 1.3.3 1.9l.2.7h-3C1.7 6 1 6.7 1 7.5c0 .4.1.7.4 1-.3.3-.4.6-.4 1 0 .5.3 1 .7 1.3-.1.2-.2.5-.2.7 0 .8.6 1.4 1.3 1.5-.1.3-.1.6 0 1 .2.6.9 1 1.5 1H7c.9 0 1.5-.1 2.1-.3l2.1-.7H14V7h-2.4zm-8.2 3.1L3 9.6c-.1-.2-.2-.4-.1-.7L3 8h5.1L7 4.7c-.1-.4-.1-.9-.1-1.3v-.3c0-.2.2-.4.4-.4h.1c.1.7.4 1.5.7 2L10.7 9H12v3h-.6l-2.5.8c-.4.1-.8.2-1.2.2H4.9c-.2 0-.4-.2-.5-.4l-.1-.5-.6-.5c-.2-.2-.4-.5-.3-.8v-.7z" />
              </svg>
            </div>
            <div className="publication-comment-stats-like-separator mx-2">•</div>
            <div className="publication-comment-stats-like-count">{comment.stats.like} J'aime</div>
          </div>

          <div>|</div>

          <div className="publication-comment-stats-comment flex ml-3 items-center">
            <div className="publication-comment-stats-comment-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                <path d="M14 3H2a1 1 0 00-1 1v7a1 1 0 001 1h9l4 3V4a1 1 0 00-1-1zM3 10V5h10v6.11L11.52 10H3zm2-3h6v1H5V7z" />
              </svg>
            </div>
            {comment.subcomments !== undefined && (
              <div className="publication-comment-stats-comment-separator mx-2">•</div>
            )}
            <div className="publication-comment-stats-comment-count">
              {subCommentsCount}
            </div>
          </div>

        </div>

        { comment.subcomments !== undefined && (
          <div className="publication-comment-subcomments">
            {comment.subcomments.length > 2 && (
              <>
                <button className="publication-comment-subcomments-button ml-3 mt-4 focus:outline-none focus:shadow-outline-none" type="button" onClick={loadAllSubComments}>Charger les réponses suivantes</button>
              </>
            )}
            {subcommentsToShow.map((subcomment) => (
              <div key={subcomment.id} className="publication-subcomments flex flex-col mt-2">
                <SubComment subcomment={subcomment} />
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    author_img: PropTypes.string.isRequired,
    author_connection_level: PropTypes.string.isRequired,
    author_job: PropTypes.string.isRequired,
    author_company: PropTypes.string,
    publish_date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      like: PropTypes.number.isRequired,
    }).isRequired,
    subcomments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        author_img: PropTypes.string.isRequired,
        author_connection_level: PropTypes.string.isRequired,
        author_job: PropTypes.string.isRequired,
        author_company: PropTypes.string,
        publish_date: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        stats: PropTypes.shape({
          like: PropTypes.number.isRequired,
        }).isRequired,
      }),
    ),
  }),
};
Comment.defaultProps = {
  comment: null,
};

export default Comment;

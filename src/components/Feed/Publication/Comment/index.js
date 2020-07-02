import React from 'react';

import './comment.scss';

import SubComment from './SubComment';

const Comment = ({ comments }) => {
  return (
    <div className="publication-comments flex flex-col mb-4">
      {comments.map((com) => {
        let commentsCount;
        if (com.subcomments !== undefined) {
          commentsCount = `${com.subcomments.length} ${com.subcomments.length <= 1 ? 'commentaire' : 'commentaires'}`;
        }

        return (
          <div key={com.id} className="publication-comment flex mx-4 mt-1 mb-3">

            <div className="publication-comment-author-avatar">
              <img className="h-9 w-9 mr-2 object-cover rounded-full" alt="" src={`/public/assets/img/publi/avatar/${com.author_img}`} />
            </div>

            <div className="publication-comment-box flex flex-col w-full">
              <div className="publication-comment-content w-full px-3 py-2 flex flex-col">
                <div className="publication-comment-content-top flex justify-between">
                  <div className="publication-comment-author">
                    <div className="publication-comment-author-name">{com.author} <span>• {com.author_connection_level}</span></div>
                    <div className="publication-comment-author-company">{com.author_job} at {com.author_company}</div>
                  </div>
                  <div className="publication-comment-published-date flex">
                    {com.publish_date}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                      <path d="M2 7h2v2H2V7zm5 2h2V7H7v2zm5-2v2h2V7h-2z" />
                    </svg>
                  </div>
                </div>
                <div className="publication-comment-content-text mt-3 mb-2">
                  {com.content}
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
                  <div className="publication-comment-stats-like-count">{com.stats.likes} J'aime</div>
                </div>

                <div>|</div>

                <div className="publication-comment-stats-comment flex ml-3 items-center">
                  <div className="publication-comment-stats-comment-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                      <path d="M14 3H2a1 1 0 00-1 1v7a1 1 0 001 1h9l4 3V4a1 1 0 00-1-1zM3 10V5h10v6.11L11.52 10H3zm2-3h6v1H5V7z" />
                    </svg>
                  </div>
                  <div className="publication-comment-stats-comment-separator mx-2">•</div>
                  <div className="publication-comment-stats-comment-count">
                    {commentsCount}
                  </div>
                </div>

              </div>

              { com.subcomments !== undefined && (
                <div className="publication-comment-subcomments">
                  <SubComment subcomments={com.subcomments} />
                </div>
              )}

            </div>

          </div>
        );
      })}
    </div>

  );
};

export default Comment;

import React from 'react';

import './comment.scss';

const Comment = ({ comments }) => {
  console.log('comments', comments);
  return (

    comments.map((com, i) => (
      <div key={i} className="publication-comment flex mx-2 my-4">
        <div className="publication-comment-author-avatar">
          <img className="h-9 w-9 mr-2 object-cover rounded-full" alt="" src={`/public/assets/img/publi-avatar/${com.author_img}`} />
        </div>
        <div className="publication-comment-content w-full p-2 flex flex-col">

          <div className="publication-comment-content-top flex justify-between">
            <div className="publication-comment-author">
              <div className="publication-comment-author-name">{com.author} <span>• {com.author_connection_level}</span></div>
              <div className="publication-comment-author-company">{com.author_job} at {com.author_company}</div>
            </div>
            <div className="publication-comment-published-date">
              {com.publish_date}
            </div>
          </div>

          <div className="publication-comment-content mt-3 mb-2">
            {com.content}
          </div>

        </div>
      </div>
    ))

  );
};

export default Comment;

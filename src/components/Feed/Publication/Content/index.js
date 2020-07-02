import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


import './content.scss';

const Content = ({ content }) => {
  const [contentToShow, setcontentToShow] = useState(content);
  const [excerpt, setExcerpt] = useState(true);

  useEffect(() => {
    const excerptContent = () => {
      let p = '';
      p = content.substring(0, 200);
      return p;
    };

    { excerpt === true ? setcontentToShow(() => excerptContent()) : setcontentToShow(content) }
  }, [excerpt]);

  return (
    <div className="publication-content px-4">
      {contentToShow}
      { excerpt === true && 
        <button className="publication-content-view-more focus:outline-none focus:shadow-outline-none" type="button" onClick={() => setExcerpt(!excerpt)}> ...voir plus </button>
      }
    </div>
  );
};

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;

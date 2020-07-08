import React from 'react';
import PropTypes from 'prop-types';

import './shared-header.scss';

const SharedHeader = ({ likedBy, commentedBy }) => {
  return (
    <div id="shared-header">
      <div className="shared-header flex items-center p-3">
        { likedBy !== null && (<div><span className="shared-header-strong">{likedBy}</span> a aimé ceci</div>) }
        { commentedBy !== null && (<div><span className="shared-header-strong">{commentedBy}</span> a commenté ceci</div>)}
      </div>
    </div>
  );
};

SharedHeader.propTypes = {
  likedBy: PropTypes.string,
  commentedBy: PropTypes.string,
};

SharedHeader.defaultProps = {
  likedBy: null,
  commentedBy: null,
};

export default SharedHeader;

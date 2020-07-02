import React from 'react';
import PropTypes from 'prop-types';

import './image.scss';

const Image = ({ image }) => {
  return (
    <div className="publication-image">
      <img className="my-3 object-cover" alt="" src={`/public/assets/img/publi/img/${image}`} />
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.string,
};

Image.defaultProps = {
  image: null,
};

export default Image;

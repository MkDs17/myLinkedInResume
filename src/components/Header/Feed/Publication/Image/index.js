import React from 'react';

import './image.scss';

const Image = ({ image }) => {
  return (
    <div className="publication-image">
      <img className="my-3 object-cover" alt="" src={`/public/assets/img/publi/img/${image}`} />
    </div>
  );
};

export default Image;

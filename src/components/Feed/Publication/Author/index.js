import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './author.scss';
import test from '../../../../public/assets/img/publi/avatar/MR.png';

import { calculateTimeBtwTwoDates } from '../../../../utils/funtions';

const avatarPath = require.context('../../../../public/assets/img/publi/avatar/', true);

const Author = ({ author }) => {
  const [dynamicDate, setDynamicDate] = useState('');

  useEffect(() => {
    setDynamicDate(calculateTimeBtwTwoDates(author.publish_date));
  }, []);

  const avatarImg = avatarPath(`./${author.avatar}`);

  return (
    <div className="publication-author px-4 pt-4 mb-3 flex justify-between">
      <div>
        <div className="flex">
          <div className="publication-author-avatar">
            <img className="h-12 w-12 mr-2 object-cover rounded-full" alt="author-avatar" src={test} />
          </div>
          <div className="publication-author-infos flex flex-col">
            <div className="flex">
              <div className="publication-author-name mr-1">
                {author.name}
              </div>
              <div className="publication-author-level-connection">
                • {author.connection_level}
              </div>
            </div>
            <div className="publication-author-company">
              {author.job} {author.company !== null && `at ${author.company}`}
            </div>
            <div className="publication-author-publish-date flex">
              {dynamicDate} •
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 1.84a5.16 5.16 0 011 .1v1.65l-1.71 1.7-.29.3v1L4.09 4.67A5.13 5.13 0 018 2.84zm1 10.22v-1.68l-.55-.28L7 10.38V9h3.09l.71.72L9.32 13zM2.84 8a5.1 5.1 0 01.67-2.49L6 8v2.38a1 1 0 00.55.89L8 12v1.16A5.17 5.17 0 012.84 8zm7.85 4.39L11.78 10a.75.75 0 00-.15-.84l-.84-.84a1 1 0 00-.7-.32H8V7l1.71-1.71a1 1 0 00.29-.7V3.24a5.14 5.14 0 01.69 9.15z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="publications-options">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
          <path d="M2 10h4v4H2v-4zm8 4h4v-4h-4v4zm8-4v4h4v-4h-4z" />
        </svg>
      </div>
    </div>
  );
};

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    connection_level: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    company: PropTypes.string,
    publish_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Author;

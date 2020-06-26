import React, { useState, useEffect } from 'react';
import { Card as Cards } from 'semantic-ui-react';

import './first.scss';

import { fakerGeneralsDatas } from '../../../../utils/funtions';

const First = () => {
  const [cardDatas, setCardDatas] = useState([]);

  useEffect(() => {
    setCardDatas(fakerGeneralsDatas());
  }, []);

  return (
    <div id="first">
      <div className="first-block">
        <div className="first-block-title">
          <h2>FIRST PAGE</h2>
          <h3>This is the first page</h3>
        </div>
        <div className="first-block-section">
          {cardDatas.map((data) => (
            <Cards
              key={data.id}
              image={data.pic}
              header={`${data.firstname} ${data.lastname}`}
              meta={data.jobTitle}
              description={data.company}
              extra={data.phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default First;

import React, { useState } from 'react';

import './actions.scss';

// eslint-disable-next-line padded-blocks
const Actions = ({ viewMoreContent, viewMoreAction, totalNotification, setTotalNotification }) => {

  const [clicked, setClicked] = useState(false);

  const addLike = () => {
    if (clicked === false) {
      setTotalNotification(totalNotification + 1);
      setClicked(true);
    }
    if (clicked === true) {
      setTotalNotification(totalNotification - 1);
      setClicked(false);
    }
  };

  return (
    <div className="publication-actions flex justify-between item-center px-2 py-1">
      <div className="publication-actions-buttons flex items-center">
        <button type="button" className="publication-actions-like flex items-center p-2 focus:outline-none focus:shadow-outline-none" onClick={() => addLike()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
            <path d="M17.51 11l-2.15-3a14.81 14.81 0 01-2.25-5.29L12.74 1H10.5A2.5 2.5 0 008 3.5v.58a9 9 0 00.32 2.39L9 9H4.66A2.61 2.61 0 002 11.4a2.48 2.48 0 00.39 1.43 2.48 2.48 0 00.69 3.39 2.46 2.46 0 001.45 2.92 2.47 2.47 0 000 .36A2.5 2.5 0 007 22h4.52a8 8 0 001.94-.24l3-.76H21V11h-3.49zM19 19h-2.12l-3.41.82A6 6 0 0112 20H7a.9.9 0 01-.9-.89v-.14l.15-1-1-.4a.9.9 0 01-.55-.83.93.93 0 010-.22l.3-.95-.73-.57a.9.9 0 01-.39-.74.88.88 0 01.12-.44l.46-.72-.46-.72a.88.88 0 01-.14-.51 1 1 0 011-.87h6.64l-1.3-4.7a9 9 0 01-.33-2.37v-.55a.5.5 0 01.5-.5h.95a17.82 17.82 0 002.52 6.22L16.6 13H19v6z" />
          </svg>
          <span className="ml-1">J'aime</span>
        </button>
        <button type="button" className="publication-actions-comment flex items-center p-2 focus:outline-none focus:shadow-outline-none" onClick={() => viewMoreAction(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
            <path d="M18 10H6V9h12v1zm4-5v17l-5-4H3a1 1 0 01-1-1V5a1 1 0 011-1h18a1 1 0 011 1zm-2 1H4v10h13.7l2.3 1.84V6zm-4 6H8v1h8v-1z" />
          </svg>
          <span className="ml-1">Commenter</span>
        </button>
        <button type="button" className="publication-actions-share flex items-center p-2 focus:outline-none focus:shadow-outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
            <path d="M24 12a1.18 1.18 0 00-.36-.84L14 2v6h-3A10 10 0 001 18v4h1.87A6.11 6.11 0 019 16h5v6l9.63-9.14A1.18 1.18 0 0024 12zm-8 5.54V14H9a8.15 8.15 0 00-6 2.84A8 8 0 0111 10h5V6.48L21.81 12z" />
          </svg>
          <span className="ml-1">Partager</span>
        </button>
      </div>
      { viewMoreContent && (
        <div className="publication-actions-options flex items-center">
          <span className="mr-1">Les plus pertinents</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
            <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Actions;

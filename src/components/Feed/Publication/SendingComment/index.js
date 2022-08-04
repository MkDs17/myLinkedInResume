import React, { useState } from 'react';
import classNames from 'classnames';

import './sending-comment.scss';

import UnknownAvatar from 'src/public/assets/img/unknown-avatar.png'

const SendingComment = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const SubmitButtonDynamicClassName = classNames(
    'bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-sm font-semibold focus:outline-none focus:shadow-outline-none',
    {
      hidden: inputValue === '',
    },
  );

  return (

    <div className="publication-sending-comment flex px-4 pt-4">
      <div className="publication-sending-comment-author-avatar">
        <img className="h-9 w-9 mr-2 object-cover rounded-full" alt="" src={UnknownAvatar} />
      </div>
      <div className="publication-sending-comment-content w-full">
        <form>
          <div className="mb-3">
            <input className="border rounded-full w-full py-2 px-3" type="text" placeholder="Ajouter un commentaire..." value={inputValue} onChange={handleChange} />
          </div>
          <div className="flex items-center justify-between">
            <button className={SubmitButtonDynamicClassName} type="button">
              Publier
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default SendingComment;

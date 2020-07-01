import React from 'react';

import './like-choice.scss';

const LikeChoice = ({ className, setLikedButtonHover, setlikedButtonClass }) => {
  // Permet de gérer l'affichage de la pop-up nous permettant de choisir l'action du like (like, love, interesst, etc...)
  const mouseOver = () => {
    setLikedButtonHover(true);
  };
  const mouseOut = () => {
    setLikedButtonHover(false);
  };

  return (
    <div className={className} onMouseOver={mouseOver} onMouseOut={mouseOut}>

      <div className="publication-action-like-choice--like" onClick={() => setlikedButtonClass('blue')}>
        <span className="publication-action-like-choice-img-popup popup rounded-full">J'aime</span>
        <img className="publication-action-like-choice-img" alt="like" src="/public/assets/img/buttons/action-like.svg" />
      </div>

      <div className="publication-action-like-choice--clap" onClick={() => setlikedButtonClass('green')}>
        <span className="publication-action-like-choice-img-popup popup rounded-full">Bravo</span>
        <img className="publication-action-like-choice-img" alt="like" src="/public/assets/img/buttons/action-clap.svg" />
      </div>

      <div className="publication-action-like-choice--love" onClick={() => setlikedButtonClass('red')}>
        <span className="publication-action-like-choice-img-popup popup rounded-full">J'adore</span>
        <img className="publication-action-like-choice-img" alt="like" src="/public/assets/img/buttons/action-love.svg" />
      </div>
      <div className="publication-action-like-choice--idea" onClick={() => setlikedButtonClass('yellow')}>
        <span className="publication-action-like-choice-img-popup popup rounded-full">Instructif</span>
        <img className="publication-action-like-choice-img" alt="like" src="/public/assets/img/buttons/action-idea.svg" />
      </div>
      <div className="publication-action-like-choice--interest" onClick={() => setlikedButtonClass('purple')}>
        <span className="publication-action-like-choice-img-popup popup rounded-full">Intéressant</span>
        <img className="publication-action-like-choice-img" alt="like" src="/public/assets/img/buttons/action-interest.svg" />
      </div>
    </div>
  );
};

export default LikeChoice;

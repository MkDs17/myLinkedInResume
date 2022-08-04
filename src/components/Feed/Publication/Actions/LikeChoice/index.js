import React from 'react';
import PropTypes from 'prop-types';

import './like-choice.scss';
import { ActionLike } from 'src/public/assets/img/buttons/action-like.svg'
import { ActionClap } from 'src/public/assets/img/buttons/action-clap.svg'
import { ActionLove } from 'src/public/assets/img/buttons/action-love.svg'
import { ActionIdea } from 'src/public/assets/img/buttons/action-idea.svg'
import { ActionInterest } from 'src/public/assets/img/buttons/action-interest.svg'

const LikeChoice = ({ className, setClicked, setLikedButtonHover, setlikedButtonClass, addLikeFromChild }) => {
// Permet de gérer l'affichage de la pop-up nous permettant de choisir l'action du like (like, love, interesst, etc...)
  const mouseOver = () => {
    setLikedButtonHover(true);
  };
  const mouseOut = () => {
    setLikedButtonHover(false);
  };

  const onActionLikeChoice = (color) => {
    addLikeFromChild();
    setlikedButtonClass(color);
    setClicked(true);
  };

  return (
    <div className={className} onMouseOver={mouseOver} onMouseOut={mouseOut}>

      <div className="publication-action-like-choice--like" onClick={() => onActionLikeChoice('blue')}>
        <span className="publication-action-like-choice-img-popup popup rounded-full">J'aime</span>
        <img className="publication-action-like-choice-img" alt="like" src={ActionLike} />
      </div>

      <div className="publication-action-like-choice--clap" onClick={() => onActionLikeChoice('green')}>
        <span className="publication-action-like-choice-img-popup popup rounded-full">Bravo</span>
        <img className="publication-action-like-choice-img" alt="like" src={ActionClap} />
      </div>

      <div className="publication-action-like-choice--love" onClick={() => onActionLikeChoice('red')}>
        <span className="publication-action-like-choice-img-popup popup rounded-full">J'adore</span>
        <img className="publication-action-like-choice-img" alt="like" src={ActionLove} />
      </div>
      <div className="publication-action-like-choice--idea" onClick={() => onActionLikeChoice('yellow')}>
        <span className="publication-action-like-choice-img-popup popup rounded-full">Instructif</span>
        <img className="publication-action-like-choice-img" alt="like" src={ActionIdea} />
      </div>
      <div className="publication-action-like-choice--interest" onClick={() => onActionLikeChoice('purple')}>
        <span className="publication-action-like-choice-img-popup popup rounded-full">Intéressant</span>
        <img className="publication-action-like-choice-img" alt="like" src={ActionInterest} />
      </div>
    </div>
  );
};

LikeChoice.propTypes = {
  className: PropTypes.string.isRequired,
  setClicked: PropTypes.func.isRequired,
  setLikedButtonHover: PropTypes.func.isRequired,
  setlikedButtonClass: PropTypes.func.isRequired,
  addLikeFromChild: PropTypes.func.isRequired,
};

export default LikeChoice;

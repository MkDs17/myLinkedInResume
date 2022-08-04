import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './actions.scss';

import {dynamicContentButton} from '../../../../utils/funtions';

import { ReactComponent as ActionLike24 } from 'src/public/assets/img/buttons/action-like-24.svg'
import { ReactComponent as ActionClap24 } from 'src/public/assets/img/buttons/action-clap-24.svg'
import { ReactComponent as ActionIdea24 } from 'src/public/assets/img/buttons/action-idea-24.svg'
import { ReactComponent as ActionInterest24 } from 'src/public/assets/img/buttons/action-interest-24.svg'
import { ReactComponent as ActionLove24 } from 'src/public/assets/img/buttons/action-love-24.svg'
import { ReactComponent as ActionLike } from 'src/public/assets/img/buttons/like.svg'
import { ReactComponent as ActionLike } from 'src/public/assets/img/buttons/like.svg'

import LikeChoice from './LikeChoice';

// eslint-disable-next-line padded-blocks
const Actions = ({ viewMoreContent, viewMoreAction, totalNotification, setTotalNotification }) => {

  // Permet de savoir si l'on a cliqué sur le bouton like (afin de ne pas pouvoir cliqué 10x d'affilé et rajouter 10 likes)
  const [clicked, setClicked] = useState(false);
  // Permet de savoir si le bouton like est survolé (afin d'afficher la popup)
  const [likedButtonHover, setLikedButtonHover] = useState(false);
  // Permet de savoir si le bouton like est survolé (afin d'afficher la popup et jouer l'animation avec)
  const [likedButtonHoverAnimation, setLikedButtonHoverAnimation] = useState(false);
  // Permet de gérer le style css de notre bouton like
  const [likedButtonClass, setlikedButtonClass] = useState('');
  // Permet de gérer le 'contenu html' de notre bouton like
  const [likedButtonHTMLContent, setLikedButtonHTMLContent] = useState({});

  // Permet de dynamiser le contenu du bouton like en fonction de notre choix (like, clap, love, etc...)
  useEffect(() => {
    setLikedButtonHTMLContent(dynamicContentButton(likedButtonClass));
  }, [likedButtonClass]);

  // Permet d'ajouter un like
  const addLike = () => {
    if (clicked === false) {
      setTotalNotification(totalNotification + 1);
      setClicked(true);
      setlikedButtonClass('blue');
    }
    if (clicked === true) {
      setTotalNotification(totalNotification - 1);
      setClicked(false);
      setlikedButtonClass('');
    }
  };
  // Permet d'ajouter un like
  const addLikeFromChild = () => {
    if (clicked === false) {
      setTotalNotification(totalNotification + 1);
      setClicked(true);
      setlikedButtonClass('blue');
    }
  };

  // Permet de gérer l'affichage de la pop-up nous permettant de choisir l'action du like (like, love, interesst, etc...)
  const mouseOver = () => {
    setLikedButtonHover(true);
    setLikedButtonHoverAnimation(true);
  };
  const mouseOut = () => {
    setLikedButtonHover(false);
    setLikedButtonHoverAnimation(false);
  };

  // Permet d'afficher la popup au survol du bouton "J'aime" permettant d'aimer de plusieurs façons (like, clap, love, etc...)
  const actionLikeChoiceClassname = classNames(
    'publication-action-like-choice px-3 py-1 bg-white rounded-full flex',
    {
      'publication-action-like-choice-active': likedButtonHover === true,
      'publication-action-like-choice-active-animation': likedButtonHover && likedButtonHoverAnimation === true,
    },
  );

  // Permet de styliser le bouton like en fonction de notre choix (like, clap, love, etc...)
  const likeButtonClassname = classNames(
    'publication-actions-like flex items-center p-2 focus:outline-none focus:shadow-outline-none',
    {
      blue: likedButtonClass === 'blue',
      green: likedButtonClass === 'green',
      red: likedButtonClass === 'red',
      yellow: likedButtonClass === 'yellow',
      purple: likedButtonClass === 'purple',
    },
  );

  return (
    <div className="publication-actions flex justify-between item-center px-2 py-1">
      <LikeChoice className={actionLikeChoiceClassname} setClicked={setClicked} setLikedButtonHover={setLikedButtonHover} setlikedButtonClass={setlikedButtonClass} addLikeFromChild={addLikeFromChild} />
      <div className="publication-actions-buttons flex items-center">

        <button type="button" className={likeButtonClassname} onClick={() => addLike()} onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <img className="" alt="like" src={`/src/public/assets/img/buttons/${likedButtonHTMLContent.img}`} />
          <span className="ml-1">{likedButtonHTMLContent.text}</span>
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

Actions.propTypes = {
  viewMoreContent: PropTypes.bool.isRequired,
  viewMoreAction: PropTypes.func.isRequired,
  totalNotification: PropTypes.number.isRequired,
  setTotalNotification: PropTypes.func.isRequired,
};

export default Actions;

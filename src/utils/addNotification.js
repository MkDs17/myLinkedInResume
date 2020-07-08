import React from 'react';
import { store } from 'react-notifications-component';
import { Emoji } from 'emoji-mart';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const addNotification = (status) => {
  const basicConfig = {
    container: 'bottom-left',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 7000,
      showIcon: true,
      pauseOnHover: true,
    },
  };

  let customClass = '';
  let emoji = '';
  let title = '';
  let content = '';

  switch (status) {
    case 'welcome': {
      customClass = "welcome",
      //emoji = "sweat_smile",
      title = "Important",
      content = "Les dialogues présents sur cette page sont une oeuvre de pure fiction. En conséquence, toute ressemblance, ou similitude avec des personnages et des faits existants ou ayant existé, ne saurait être que coïncidence fortuite."
    }
    break;
    case 'guide': {
      customClass = "guide",
      //emoji = "sweat_smile",
      title = "Promis c'est la dernière",
      content = "Pour une meilleure compréhension de mon histoire, l'équipe technique et moi-même vous conseillons une lecture de bas en haut."
    }
    break;
    
    default: {
      customClass = "warning",
      emoji = "grey_exclamation",
      title = "Hum, seems we got trouble",
      content = "Please, reload the page or call 911"
    }
    break;
}

  store.addNotification({
    content: (
      <div className={`notification-custom notification-custom-${customClass}`}>
        {/* <div className="notification-custom-icon">
          <Emoji
            emoji={emoji}
            set="google"
            skin={3}
            size={40}
          />
        </div> */}
        <div className="notification-custom-content">
          <div className="notification-custom-content-title">{title}</div>
          <div className="notification-custom-content-message">{content}</div>
        </div>
      </div>
    ),
    ...basicConfig,
  });
};

export default addNotification;

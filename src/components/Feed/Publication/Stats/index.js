import React from 'react';
import PropTypes from 'prop-types';

import './stats.scss';

import { ReactComponent as IconsLike } from 'src/public/assets/img/icons/like.svg'
import { ReactComponent as IconsLove } from 'src/public/assets/img/icons/love.svg'
import { ReactComponent as IconsClap } from 'src/public/assets/img/icons/clap.svg'
import { ReactComponent as IconsIdea } from 'src/public/assets/img/icons/idea.svg'
import { ReactComponent as IconsThinking } from 'src/public/assets/img/icons/thinking.svg'

const Stats = ({ stats, viewMoreAction, totalNotification, commentsCounter }) => {
  return (
    <div className="publication-stats flex items-center mx-4 pb-2">
      <div className="publication-stats-icons flex items-center">
        {stats.notifs.like > 0 && (
          <div className="publication-stats-icons-like">
            <img className="object-cover rounded-full" alt="like" src={IconsLike} />
          </div>
        )}
        {stats.notifs.clap > 0 && (
          <div className="publication-stats-icons-clap">
            <img className="object-cover rounded-full" alt="clap" src={IconsClap} />
          </div>
        )}
        {stats.notifs.love > 0 && (
          <div className="publication-stats-icons-love">
            <img className="object-cover rounded-full" alt="love" src={IconsLove} />
          </div>
        )}
        {stats.notifs.interest > 0 && (
          <div className="publication-stats-icons-thinking">
            <img className="object-cover rounded-full" alt="thinking" src={IconsThinking} />
          </div>
        )}
        {stats.notifs.idea > 0 && (
          <div className="publication-stats-icons-idea">
            <img className="object-cover rounded-full" alt="idea" src={IconsIdea} />
          </div>
        )}
        <div className="publication-stats-counting">
          <span className="publication-stats-counting-notifs">
            {totalNotification.toLocaleString('fr-FR')}
          </span>
        </div>
      </div>
      <button className="publication-stats-counting-comments focus:outline-none focus:shadow-outline-none items-center" type="button" onClick={() => viewMoreAction(true)}>
        • {commentsCounter} commentaires
      </button>
      <div className="publication-stats-counting-views items-center">
        • {stats.counting_views.toLocaleString('fr-FR')} vues
      </div>
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    counting_views: PropTypes.number.isRequired,
    notifs: PropTypes.shape({
      like: PropTypes.number.isRequired,
      love: PropTypes.number.isRequired,
      clap: PropTypes.number.isRequired,
      idea: PropTypes.number.isRequired,
      interest: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  viewMoreAction: PropTypes.func.isRequired,
  totalNotification: PropTypes.number.isRequired,
  commentsCounter: PropTypes.number.isRequired,
};

export default Stats;

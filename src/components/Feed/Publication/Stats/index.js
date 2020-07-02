import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './stats.scss';

const Stats = ({ stats, viewMoreAction, totalNotification, setTotalNotification }) => {
  useEffect(() => {
    setTotalNotification(stats.counting_total_notifs);
  }, []);

  return (
    <div className="publication-stats flex items-center mx-4 pb-2">
      <div className="publication-stats-icons flex items-center">
        <div className="publication-stats-icons-like">
          <img className="object-cover rounded-full" alt="like" src="/public/assets/img/icons/like.svg" />
        </div>
        <div className="publication-stats-icons-clap">
          <img className="object-cover rounded-full" alt="clap" src="/public/assets/img/icons/clap.svg" />
        </div>
        <div className="publication-stats-icons-love">
          <img className="object-cover rounded-full" alt="love" src="/public/assets/img/icons/love.svg" />
        </div>
        <div className="publication-stats-icons-thinking">
          <img className="object-cover rounded-full" alt="thinking" src="/public/assets/img/icons/thinking.svg" />
        </div>
        <div className="publication-stats-icons-idea">
          <img className="object-cover rounded-full" alt="idea" src="/public/assets/img/icons/idea.svg" />
        </div>
        <div className="publication-stats-counting">
          <span className="publication-stats-counting-notifs">
            {totalNotification}
          </span>
        </div>
      </div>
      <button className="publication-stats-counting-comments focus:outline-none focus:shadow-outline-none items-center" type="button" onClick={() => viewMoreAction(true)}>
        • {stats.counting_comments} commentaires
      </button>
      <div className="publication-stats-counting-views items-center">
        • {stats.counting_views.toLocaleString('fr-FR')} vues
      </div>
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    counting_total_notifs: PropTypes.number.isRequired,
    counting_comments: PropTypes.number.isRequired,
    counting_views: PropTypes.number.isRequired,
    notifs: PropTypes.shape({
      likes: PropTypes.number.isRequired,
      love: PropTypes.number.isRequired,
      clap: PropTypes.number.isRequired,
      idea: PropTypes.number.isRequired,
      interesting: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  viewMoreAction: PropTypes.func.isRequired,
  totalNotification: PropTypes.number.isRequired,
  setTotalNotification: PropTypes.func.isRequired,
};

export default Stats;

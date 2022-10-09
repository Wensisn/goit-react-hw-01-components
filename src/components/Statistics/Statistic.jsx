import PropTypes from 'prop-types';
import { EventStatic } from './EventStatistic/EventStatic';
import css from './Statistic.module.css';

export const Statistic = ({title , statistics  }) => {
  return (
    <div className={css.container}>
      <section className={css.statistics}>
        {title ? <h2 className={css.title}>{title}</h2> : null}
        <ul className={css.statList}>
          {statistics.map(event => (
            <EventStatic
              key={event.id}
              label={event.label}
              percentage={event.percentage}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};


Statistic.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

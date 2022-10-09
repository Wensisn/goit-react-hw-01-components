import PropTypes from 'prop-types';
import { EventStatic } from './EventStatistic/EventStatic';
import css from './Statistic.module.css';

export const Statistic = ({ statistics }) => {
  return (
    <div className={css.container}>
      <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>
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

import PropTypes from 'prop-types';
import { EventStatic } from './EventStatistic/EventStatic';
import css from './Statistic.module.css';

export const Statistic = ({ events}) => {
    return (<div className={css.container}>
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>
            <ul className={css.statList}>
            {events.map(event => (
            <EventStatic key={event.id} label={event.label} percentage={event.percentage} />
        ))}
        </ul>
        </section>
        </div>)
};

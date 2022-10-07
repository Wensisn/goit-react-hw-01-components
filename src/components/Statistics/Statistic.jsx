import PropTypes from 'prop-types';
import { EventStatic } from '../EventStatistic/EventStatic';
import css from './Statistic.module.css';

export const Statistic = ({ events}) => {
    return (<div>
        {events.map(event => (
            <EventStatic key={event.id} label={event.label} percentage={event.percentage} />
        ))}
        </div>)
};

// export const Statistic = ({ events : {label , percentage}}) => {
//    return (<section className="statistics">
//   <h2 className="title">Upload stats</h2>

//   <ul className="stat-list">
//     <li className="item">
//       <span className="label">{label}</span>
//       <span className="percentage">{percentage}%</span>
//     </li>
//     <li className="item">
//       <span className="label">{label}</span>
//       <span className="percentage">{percentage}%</span>
//     </li>
//     <li className="item">
//       <span className="label">{label}</span>
//       <span className="percentage">{percentage}%</span>
//     </li>
//     <li className="item">
//       <span className="label">{label}</span>
//       <span className="percentage">{percentage}%</span>
//     </li>
//   </ul>
// </section>)
// }


// Statistic.propTypes = {
//     // id: PropTypes.number.isRequired,
//     label: PropTypes.string.isRequired, 
//     percentag: PropTypes.string.isRequired ,
// }
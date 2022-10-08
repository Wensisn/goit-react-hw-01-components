import PropTypes from 'prop-types';
import randomColors from './randomColor'
import css from './EventStatic.module.css'

export const EventStatic = ({ id, label, percentage }) => {
   return (
    <li id="randomColors" className={css.item} key={id}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
)
}

EventStatic.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired, 
    percentag: PropTypes.string.isRequired ,
}

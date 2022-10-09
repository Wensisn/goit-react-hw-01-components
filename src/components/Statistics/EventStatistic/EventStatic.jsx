import PropTypes from 'prop-types';
import css from './EventStatic.module.css'

export const EventStatic = ({ label, percentage }) => {
   return (
    <li id="randomColors" className={css.item} style={{backgroundColor :randomHsl() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
)
}

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 50%, 40%, 1)';
}

EventStatic.propTypes = {
    label: PropTypes.string.isRequired, 
    percentag: PropTypes.number.isRequired ,
}

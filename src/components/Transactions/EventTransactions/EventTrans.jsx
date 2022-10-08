import PropTypes from 'prop-types';
import css from './EventTrans.module.css'

export const EventTrans = ({ id, type, amount , currency }) => {
   return (
<tr key={id} className={css.trItem}>
    <td className={css.tdItem}>{type}</td>
    <td className={css.tdItem}>{amount}</td>
    <td className={css.tdItem}>{currency}</td>
</tr>
)
}

EventTrans.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired, 
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired ,
}

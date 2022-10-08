import PropTypes from 'prop-types';
import { EventTrans } from './EventTransactions/EventTrans';
import css from './Transactions.module.css';

export const Transaction = ({item}) => {
    return (<div className={css.container}>
       <table >
<thead>
    <tr  className={css.containerList}>
      <th className={css.thItem}>Type</th>
      <th className={css.thItem}>Amount</th>
      <th className={css.thItem}>Currency</th>
    </tr>
</thead>
  <tbody>
      {item.map(event => (
        <EventTrans key={event.id}
        type={event.type}
        amount={event.amount}
        currency={event.currency} />
      ))}     
  </tbody>
</table>
</div>)
};

Transaction.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
     id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired, 
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired ,
    })
  ).isRequired,
};


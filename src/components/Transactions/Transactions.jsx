import PropTypes from 'prop-types';
import { EventTrans } from './EventTransactions/EventTrans';
import css from './Transactions.module.css';

export const Transaction = ({ items }) => {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead className={css.titleList}>
          <tr>
            <th className={css.thItem}>Type</th>
            <th className={css.thItem}>Amount</th>
            <th className={css.thItem}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.tablebody}>
          {items.map(event => (
            <EventTrans
              key={event.id}
              type={event.type}
              amount={event.amount}
              currency={event.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

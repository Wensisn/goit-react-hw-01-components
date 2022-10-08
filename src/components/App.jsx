import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistic'
import { FriendList } from './FriendsList/FriendList'
import { Transaction } from './Transactions/Transactions';
import css from 'App.module.css'
import users from 'user.json'
import statistics from 'data.json'
import friends from 'friends.json'
import items from 'transactions.json'

export const App = () => {
  return (
    <div className={css.container}>
      <Profile user={users} />
      <Statistic events={statistics} />
      <FriendList friend={friends} />
      <Transaction item={items} />
    </div>
  );
};

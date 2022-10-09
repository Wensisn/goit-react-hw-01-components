import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistic';
import { FriendList } from './FriendsList/FriendList';
import { Transaction } from './Transactions/Transactions';
import css from 'App.module.css';
import user from 'user.json';
import statistics from 'data.json';
import friends from 'friends.json';
import items from 'transactions.json';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic statistics={statistics} />
      <FriendList friends={friends} />
      <Transaction items={items} />
    </div>
  );
};

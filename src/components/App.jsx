import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistic'
import css from 'App.module.css'
import users from 'user.json'
import statistics from 'data.json'

export const App = () => {
  return (
    <div
      className={css.all}
    >
      <Profile user={users} />
      <Statistic events={statistics}/>
    </div>
  );
};

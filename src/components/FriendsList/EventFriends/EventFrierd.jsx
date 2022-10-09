import PropTypes from 'prop-types';
import css from './StyleFriends.module.css';
import { BsFillCircleFill } from 'react-icons/bs';
export const EventFriend = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={css.status}>
        {isOnline ? (
          <BsFillCircleFill style={{ color: 'green' }} />
        ) : (
          <BsFillCircleFill style={{ color: 'red' }} />
        )}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

EventFriend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

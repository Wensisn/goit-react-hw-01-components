import PropTypes from 'prop-types';
import css from './StyleFriends.module.css';

export const EventFriend = ({ avatar , name , isOnline , id }) => {
   return (
<li className={css.item} key={id}>
  <span className={css.status}>{isOnline}</span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
   <p className={css.name}>{name}</p>
</li>
)
}

EventFriend.propTypes = {
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
}





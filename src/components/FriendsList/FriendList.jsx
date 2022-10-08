import PropTypes from 'prop-types';
import { EventFriend } from './EventFriends/EventFrierd';
import css from './FriendList.module.css';

export const FriendList = ({ friend}) => {
    return (<div className={css.container}>
      <ul className={css.friendList}>
        {friend.map(event => (
    <EventFriend
    key={event.id}
    avatar={event.avatar}
    name={event.name}
    isOnline={event.isOnline}
    />))}
</ul> 
</div>)
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
  PropTypes.shape({
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

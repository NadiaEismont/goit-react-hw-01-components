import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import style from './friendList.module.css';
export default function FriendList({ friends }) {
  return (
    <section className={style.section}>
      <ul class={style.friendList}>
        {friends.map(friend => (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </section>
  );
}
FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import style from './friendList.module.css';
export default function FriendList({ friends }) {
  return (
    <section className={style.section}>
      <ul class={style.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
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

import FriendListItem from './FriendListItem';
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

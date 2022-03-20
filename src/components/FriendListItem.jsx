import PropTypes from 'prop-types';
import style from './friendList.module.css';
export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={style.item}>
      <span className={isOnline ? style.green : style.red}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}
FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

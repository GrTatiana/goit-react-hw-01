import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

function FriendList({ friends }) {
  console.log(friends);
  return (
    <>
      <ul className={css.list}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          //   <li>
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
          //   </li>
        ))}
      </ul>
    </>
  );
}

export default FriendList;

import clsx from "clsx";
import css from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.liItem}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={clsx({
          [css.online]: isOnline === "Online",
          [css.offline]: isOnline === "Offline",
        })}
      >
        {isOnline}
      </p>
    </div>
  );
}
export default FriendListItem;

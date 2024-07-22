
import css from "./Profile.module.css";

function Profile({name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div>
        <img
          className={css.profileImg}
          src={image}
          alt="User avatar"/>
        <p className={css.profileUsername}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileTag}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span className={css.profileFVL}>Followers</span>
          <span className={css.profileFVLItem}>{stats.followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.profileFVL}>Views</span>
          <span className={css.profileFVLItem}>{stats.views}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.profileFVL}>Likes</span>
          <span className={css.profileFVLItem}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;

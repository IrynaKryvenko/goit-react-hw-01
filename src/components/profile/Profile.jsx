import userData from '../../assets/userData.json';
import css from'./Profile.module.css';

const Profile = ({
name,
tag,
location,
image, 
stats
}) => {
    return (
      <div className={css.profileBox}>
  <div className={css.profile}>
                <img
            className={css.avatar}
      src={image}
      alt="User avatar"
    />
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.listItem}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={css.listItem}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={css.listItem}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}
export default Profile;
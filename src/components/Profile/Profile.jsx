import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.cardImage} src={image} alt="User avatar" />
        <p className={styles.text}>{name}</p>
        <div className={styles.cardText}>
          <p>{tag}</p> <p>{location}</p>
        </div>
      </div>
      <ul className={styles.profileList}>
        <li className={styles.profileListItem}>
          <span>Followers</span>
          <span className={styles.text}>{stats.followers}</span>
        </li>
        <li className={styles.profileListItem}>
          <span>Views</span> <span className={styles.text}>{stats.views}</span>
        </li>
        <li className={styles.profileListItem}>
          <span>Likes</span> <span className={styles.text}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;

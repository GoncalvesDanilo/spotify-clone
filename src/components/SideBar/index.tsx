import Icons from '../Icons';
import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Icons.SpotifyLogo className={styles.logo} />
      <div className={styles.options}>
        <div className={styles.option}>
          <Icons.House className={styles.icon} />
          <p>Home</p>
        </div>
        <div className={styles.option}>
          <Icons.Search className={styles.icon} />
          <p>Search</p>
        </div>
        <div className={styles.option}>
          <Icons.Library className={styles.icon} />
          <p>Your Library</p>
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.option}>
          <div className={styles.iconWrapper + ' ' + styles.plus}>
            <Icons.Plus />
          </div>
          <p>Create Playlist</p>
        </div>
        <div className={styles.option}>
          <div className={styles.iconWrapper + ' ' + styles.heart}>
            <Icons.Heart />
          </div>
          <p>Liked Songs</p>
        </div>
      </div>
      <hr className={styles.separator} />
      <div className={styles.playlists}>
        {[
          'Playlist 1',
          'Playlist 2',
          'Playlist 3',
          'Playlist 4',
          'Playlist 5',
          'Playlist 1',
          'Playlist 2',
          'Playlist 3',
          'Playlist 4',
          'Playlist 5',
          'Playlist 1',
          'Playlist 2',
          'Playlist 3',
          'Playlist 4',
          'Playlist 5',
          'Playlist 1',
          'Playlist 2',
          'Playlist 3',
          'Playlist 4',
          'Playlist 5',
        ].map((playlist) => (
          <div className={styles.playlist}>
            <p>{playlist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

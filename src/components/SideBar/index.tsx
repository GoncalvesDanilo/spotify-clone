import Icons from '../Icons';
import { playlists } from './helper';
import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <div className={styles.option}>
          <Icons.HouseActive className={styles.icon} />
          <p>Home</p>
        </div>
        <div className={styles.option}>
          <Icons.Search className={styles.icon} />
          <p>Search</p>
        </div>
      </div>
      <div className={styles.section + ' ' + styles.library}>
        <div className={styles.header}>
          <div className={styles.option}>
            <Icons.LibraryActive className={styles.icon} />
            <p>Your Library</p>
          </div>
          <div className={styles.actions}>
            <div className={styles.action}>
              <Icons.Plus className={styles.icon} />
            </div>
            <div className={styles.action}>
              <Icons.Arrow className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.filters}>
          <div className={styles.filter}>
            <p>Playlists</p>
          </div>
          <div className={styles.filter}>
            <p>Artists</p>
          </div>
          <div className={styles.filter}>
            <p>Albums</p>
          </div>
          <div className={styles.filter}>
            <p>Podcasts & Shows</p>
          </div>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.search}>
            <div className={styles.iconWrapper}>
              <Icons.Search className={styles.icon} />
            </div>
          </div>
          <div className={styles.sort}>
            <p>Recents</p>
            <Icons.DropdownArrow className={styles.icon} />
          </div>
        </div>
        <div className={styles.playlists}>
          {playlists.map((playlist) => (
            <div className={styles.playlist}>
              <div className={styles.image}>
                <img src={playlist.image} alt="playlist cover" />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{playlist.name}</div>
                <div className={styles.details}>
                  {playlist.type} • {playlist.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

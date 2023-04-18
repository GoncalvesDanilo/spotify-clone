import Icons from '../Icons';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.song}>
        <div>
          <img src="https://i.scdn.co/image/ab67616d00001e0213e54d6687e65678d60466c2" alt="song" />
        </div>
        <div className={styles.songInfo}>
          <p className={styles.name}>
            Superhero
            {/* (Heroes & Villains) [with Future & Chris Brown] */}
          </p>
          <p className={styles.artist}>Metro Boomin</p>
        </div>
        <div className={styles.action}>
          <div className={styles.like}>
            <Icons.HeartActive className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.buttons}>
          <div className={styles.button + ' ' + styles.shuffle}>
            <Icons.Shuffle className={styles.icon} />
          </div>
          <div className={styles.button + ' ' + styles.previous}>
            <Icons.Skip className={styles.icon} />
          </div>
          <div className={styles.button + ' ' + styles.playPause}>
            <Icons.Pause className={styles.icon} />
          </div>
          <div className={styles.button + ' ' + styles.next}>
            <Icons.Skip className={styles.icon} />
          </div>
          <div className={styles.button + ' ' + styles.repeat}>
            <Icons.Repeat className={styles.icon} />
          </div>
        </div>
        <div className={styles.timeline}>
          <div className={styles.currentTime}>
            <p>0:00</p>
          </div>
          <div className={styles.progressBar}>
            <div></div>
          </div>
          <div className={styles.endTime}>
            <p>3:02</p>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.button}>
          <Icons.Mic className={styles.icon} />
        </div>
        <div className={styles.button}>
          <Icons.Queue className={styles.icon} />
        </div>
        <div className={styles.button}>
          <Icons.PC className={styles.icon} />
        </div>
        <div className={styles.button}>
          <Icons.Volume className={styles.icon} />
        </div>
        <div className={styles.volumeBar}>
          <div></div>
        </div>
        <div className={styles.button}>
          <Icons.FullScreen className={styles.icon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

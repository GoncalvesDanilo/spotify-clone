import Icons from '../../components/Icons';
import Input from '../../components/Input';
import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.search}>
      <header className={styles.header}>
        <div className={styles.history}>
          <div className={styles.action}>
            <Icons.SimpleArrow className={styles.icon} />
          </div>
          <div className={styles.action}>
            <Icons.SimpleArrow className={styles.icon} />
          </div>
        </div>
        <Input />
      </header>
      <div className={styles.categories}>
        <h1>Browse All</h1>
      </div>
    </div>
  );
};

export default Search;

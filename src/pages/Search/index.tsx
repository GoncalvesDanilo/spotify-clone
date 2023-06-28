import Icons from '../../components/Icons';
import Input from '../../components/Input';
import { categories } from './helper';

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
        <Input type="text" placeholder="What do you want to listen to?" className={styles.input} />
        <div className={styles.userWidget}>
          <div className={styles.profilePhoto}></div>
        </div>
      </header>
      <div className={styles.categories}>
        <h1>Browse all</h1>
        <div className={styles.container}>
          {categories.map((category, index) => (
            <div className={styles.category} key={index} style={{ backgroundColor: category.backgroundColor }}>
              <p className={styles.label}>{category.label}</p>
              <img src={category.image} alt={category.label} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

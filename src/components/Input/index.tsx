import Icons from '../Icons';
import styles from './Input.module.css';

const Input = () => {
  return (
    <div className={styles.container}>
      <Icons.Search className={styles.icon} />
      <input type="text" placeholder="What do you want to listen to?" />
    </div>
  )
}

export default Input;

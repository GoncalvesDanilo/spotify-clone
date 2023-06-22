import styles from './Slider.module.css';

type SliderProps = {
  className?: string;
}

const Slider = ({ className }: SliderProps) => {
  return (
    <div className={styles.slider + ' ' + className}>
      <div className={styles.bar}>
        <div className={styles.progress}></div>
      </div>
      <div className={styles.thumb}></div>
    </div>
  );
};

export default Slider;

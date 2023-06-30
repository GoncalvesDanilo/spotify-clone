import Icons from '../../components/Icons';
import styles from './Home.module.css';
import { mainCards, recommendations } from './helper';

const Home = () => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <div className={styles.history}>
          <div className={styles.action}>
            <Icons.SimpleArrow className={styles.icon} />
          </div>
          <div className={styles.action}>
            <Icons.SimpleArrow className={styles.icon} />
          </div>
        </div>
        <div className={styles.userWidget}>
          <div className={styles.profilePhoto}></div>
        </div>
      </header>
      <div className={styles.content}>
        <h1>Good afternoon</h1>
        <div className={styles.mainCards}>
          {mainCards.map((card) => (
            <div className={styles.card}>
              <img src={card.image} alt={card.name} className={styles.image} />
              <p>{card.name}</p>
              <div className={styles.play}>
                <div className={styles.button}>
                  <Icons.Play className={styles.icon} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {recommendations.map((recommendation) => (
          <section className={styles.recommendation}>
            <div className={styles.header}>
              <h2>{recommendation.title}</h2>
              <p>Show all</p>
            </div>
            <div className={styles.cards}>
              {recommendation.cards.map((card) => (
                <div className={styles.card}>
                  <img src={card.image} alt={card.title} className={styles.image} />
                  <h4>{card.title}</h4>
                  <p>{card.details}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;

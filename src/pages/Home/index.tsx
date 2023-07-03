import Icons from '../../components/Icons';
import styles from './Home.module.css';
import { getDayPeriod, mainCards, recommendations } from './helper';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
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
          <div className={styles.background}></div>
        </header>
        <div className={styles.container}>
          <h1>Good {getDayPeriod()}</h1>
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
                    <div className={styles.content}>
                      <div className={styles.imageContainer}>
                        <img src={card.image} alt={card.title} />
                        <div className={styles.play}>
                          <div className={styles.button}>
                            <Icons.Play className={styles.icon} />
                          </div>
                        </div>
                      </div>
                      <h4>{card.title}</h4>
                      <p>{card.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className={styles.background}></div>
      </div>
    </div>
  );
};

export default Home;

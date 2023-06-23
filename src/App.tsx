import Footer from './components/Footer';
import SideBar from './components/SideBar';

import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.pages}>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;

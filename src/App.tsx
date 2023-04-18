import Footer from './components/Footer';
import SideBar from './components/SideBar';

import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;

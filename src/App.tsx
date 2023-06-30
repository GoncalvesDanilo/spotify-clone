import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import { routes } from './routes';

import styles from './styles/App.module.css';
import CustomRoute from './routes/customRoute';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.pages}>
        <BrowserRouter>
          <SideBar />
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={<CustomRoute route={route} />} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;

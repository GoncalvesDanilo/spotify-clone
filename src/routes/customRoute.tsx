import { AppRoute } from '.';
import styles from '../styles/App.module.css';

type CustomRouteProps = {
  route: AppRoute;
};

const CustomRoute = ({ route }: CustomRouteProps) => {
  return <div className={styles.page}>{route.element}</div>;
};

export default CustomRoute;

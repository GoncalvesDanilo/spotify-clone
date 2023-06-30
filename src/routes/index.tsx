import Home from '../pages/Home';
import Search from '../pages/Search';

export type AppRoute = {
  path: string;
  element: JSX.Element;
};

export const routes = [
  {
    name: 'search',
    path: '/search',
    element: <Search />,
  },
  {
    name: 'home',
    path: '/',
    element: <Home />,
  },
];

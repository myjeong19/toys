import classes from './css/Main.module.css';

import { Header } from '../header/Header';
import { List } from './List';

export const Main = () => {
  return (
    <main className={classes.main}>
      <Header />
      <ul>
        <List />
      </ul>
    </main>
  );
};

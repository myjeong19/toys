import classes from './css/Main.module.css';

import { Header } from '../header/Header';
import { List } from './List';

export const Main = ({ tasks }) => {
  return (
    <main className={classes.main}>
      <Header />
      <List tasks={tasks} />
    </main>
  );
};

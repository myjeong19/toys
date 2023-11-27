import classes from './css/Main.module.css';
import { List } from './List';

export const Main = () => {
  const status = [{ type: 'To do' }, { type: 'Doing' }, { type: 'Done' }];
  const elementStatusList = status.map((status, index) => (
    <List status={status.type} key={index} />
  ));

  return <main className={classes.main}>{elementStatusList}</main>;
};

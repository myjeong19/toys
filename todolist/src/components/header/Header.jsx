import classes from './css/Header.module.css';

export const Header = () => {
  return (
    <header className={classes.header}>
      <button>All</button>
      <button>Todo</button>
      <button>Doing</button>
      <button>Done</button>
    </header>
  );
};

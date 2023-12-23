import classes from './css/Tasks.module.css';

export const Tasks = ({ tasks }) => {
  const elementTasks = tasks.map(todo => {
    return (
      <li className={classes.card} key={todo.id}>
        <h3>{todo.title}</h3>
        <button>{todo.status}</button>
      </li>
    );
  });

  return <>{elementTasks}</>;
};

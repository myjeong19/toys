import classes from './css/Tasks.module.css';
import { MdDelete } from 'react-icons/md';

export const Tasks = ({ tasks }) => {
  const elementTasks = tasks.map(todo => {
    return (
      <li className={classes.card} key={todo.id}>
        <h3>{todo.title}</h3>

        <div>
          <button>{todo.status}</button>
          <button>
            <MdDelete />
          </button>
        </div>
      </li>
    );
  });

  return <>{elementTasks}</>;
};

import { useState } from 'react';
import classes from './css/List.module.css';
import { AddTodo } from './AddTodo';

export const List = ({ status }) => {
  const [addTodo, setAddTodo] = useState(false);
  const handleOnAddTodo = () => setAddTodo(!addTodo);

  return (
    <ul className={classes.list}>
      <h3>{status}</h3>
      {!addTodo && <button onClick={handleOnAddTodo}>Add a Card</button>}
      {addTodo && <AddTodo onAddTodo={setAddTodo} />}
    </ul>
  );
};

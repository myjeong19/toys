import { useState } from 'react';
import classes from './css/Form.module.css';

export const Form = ({ todoList, onTodoList }) => {
  const [userValue, setUserValue] = useState('');

  const handleSubmit = event => {
    if (event.key === 'Enter') {
      onTodoList([...todoList, userValue]);
    }
  };

  const handleUserValue = event => setUserValue(event.target.value);

  return (
    <div className={classes.form} onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={handleUserValue}
        value={userValue}
        onKeyDown={handleSubmit}
      />
    </div>
  );
};

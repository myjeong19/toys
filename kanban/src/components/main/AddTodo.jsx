import classes from './css/AddTodo.module.css';

export const AddTodo = ({ onAddTodo }) => {
  const handleOnAddTodo = () => onAddTodo(false);
  return (
    <div className={classes.form}>
      <input type='text' />
      <div className={classes['button-group']}>
        <button>Add</button>
        <button onClick={handleOnAddTodo}>X</button>
      </div>
    </div>
  );
};

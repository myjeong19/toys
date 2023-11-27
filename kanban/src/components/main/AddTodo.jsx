import classes from './css/AddTodo.module.css';

export const AddTodo = () => {
  return (
    <div className={classes.form}>
      <input type='text' />
      <div className={classes['button-group']}>
        <button>Add</button>
        <button>X</button>
      </div>
    </div>
  );
};

import { useState } from 'react';
import classes from './css/List.module.css';

export const List = ({ status }) => {
  return (
    <ul className={classes.list}>
      <h3>{status}</h3>
      <button>Add a Card</button>
    </ul>
  );
};

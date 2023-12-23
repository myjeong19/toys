import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { Main } from './components/main/Main';
import { Form } from './components/side-nav/Form';
import { DateBox } from './components/side-nav/DateBox';
import classes from './App.module.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const fetchDate = async () => {
    let { data: tasks, error } = await supabase.from('todos').select('*');
    setTasks(tasks);
  };

  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <div className={classes.app}>
      <Main tasks={tasks} />
      <Form />
      <DateBox />
    </div>
  );
}

export default App;

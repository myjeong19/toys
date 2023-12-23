import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { Main } from './components/main/Main';

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
    <>
      <Main tasks={tasks} />
    </>
  );
}

export default App;

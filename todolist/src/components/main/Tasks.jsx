export const Tasks = ({ tasks }) => {
  const elementTasks = tasks.map(todo => {
    return (
      <li key={todo.id}>
        <h3>{todo.title}</h3>
        <strong>{todo.status}</strong>
      </li>
    );
  });

  console.log(tasks);

  return <>{elementTasks}</>;
};

import { Tasks } from './Tasks';

export const List = ({ tasks }) => {
  return (
    <ul>
      <Tasks tasks={tasks} />
    </ul>
  );
};

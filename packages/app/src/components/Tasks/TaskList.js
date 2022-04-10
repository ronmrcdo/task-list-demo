import { forwardRef } from 'react';
import { useTasksQuery } from '../../graphql/task/query';
import TaskItem from './TaskItem';

/* eslint-disable no-unused-vars */
const TaskList = forwardRef((props, ref) => {
  const [data, refetch] = useTasksQuery();
  const handleRefetch = () => refetch();

  /* eslint-disable no-param-reassign */
  ref.current = handleRefetch;

  return data ? (
    <ul className="list-none w-full my-5">
      {data.tasks.length < 1 ? (
        <li>No Task found!</li>
      ) : (
        data.tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            note={task.note}
            onDeleteItem={handleRefetch}
            timeStamp={Number(task.createdAt)}
          />
        ))
      )}
    </ul>
  ) : null;
});

export default TaskList;

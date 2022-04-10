import { useRef } from 'react';
import TaskForm from '../components/Tasks/TaskForm';
import TaskList from '../components/Tasks/TaskList';

function Home() {
  const taskListRef = useRef(null);
  const refetchTask = () => {
    if (taskListRef?.current) {
      taskListRef.current();
    }
  };

  return (
    <div className="w-full flex items-stretch justify-center my-20">
      <div className="w-full max-w-4xl flex items-start justify-center">
        <div className="w-1/2 flex flex-col">
          <TaskForm onCreateTask={refetchTask} />
          <TaskList ref={taskListRef} />
        </div>
      </div>
    </div>
  );
}

export default Home;

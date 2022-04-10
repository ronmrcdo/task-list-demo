import PropTypes from 'prop-types';
import { useTaskMutation } from '../../graphql/task/mutation';

function TaskItem({ id, note, onDeleteItem, timeStamp }) {
  const [, deleteTask] = useTaskMutation();

  const deleteItem = async () => {
    await deleteTask(id);
    onDeleteItem(id);
  };

  return (
    <li className="w-full flex items-center justify-between py-2">
      <div className="font-bold flex flex-col">
        <div>{note}</div>
        <div className="text-xs text-slate-500">
          {new Date(timeStamp).toLocaleDateString()}
        </div>
      </div>
      <button
        className="rounded-md flex items-center text-sm p-1 justify-center text-center bg-red-700 text-white"
        onClick={deleteItem}
        type="button"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  timeStamp: PropTypes.number.isRequired,
};

export default TaskItem;

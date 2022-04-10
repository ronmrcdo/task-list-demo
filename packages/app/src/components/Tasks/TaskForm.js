import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useTaskMutation } from '../../graphql/task/mutation';

function TaskForm({ onCreateTask }) {
  const [createTask] = useTaskMutation();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  /* eslint-disable no-console */
  const onSubmit = (values) =>
    createTask(values.note).then(() => onCreateTask());

  return (
    <form
      className="w-full flex items-center justify-center space-x-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label
          className={`block mb-2 text-sm font-medium ${
            errors.note ? 'text-red-600' : 'text-gray-900'
          }`}
          htmlFor="note"
        >
          Note
        </label>
        <input
          className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
            errors.note ? 'border-red-600' : 'border-gray-300'
          }`}
          id="note"
          name="note"
          required
          type="note"
          /* eslint-disable react/jsx-props-no-spreading */
          {...register('note', { required: true })}
        />
        {errors.note && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.note.message}
          </p>
        )}
      </div>
      <div className="pt-6">
        <button
          className="text-white bg-primary hover:bg-teal-700 ease-in duration-200 focus:ring-4 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}

TaskForm.propTypes = {
  onCreateTask: PropTypes.func.isRequired,
};

export default TaskForm;

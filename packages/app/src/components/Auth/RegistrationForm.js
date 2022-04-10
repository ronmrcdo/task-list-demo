import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useUserMutation } from '../../graphql/user/mutation';

function RegistrationForm() {
  const navigate = useNavigate();
  const [, registerMutation] = useUserMutation();
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm();

  const onSubmit = (values) =>
    registerMutation(values.email, values.password, values.fullName)
      .then(() => navigate('/'))
      .catch(() =>
        setError('email', {
          type: 'custom',
          message: 'Email is already taken',
        }),
      );

  return (
    <form
      className="w-full px-10 lg:px-0 lg:w-1/2 flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl leading-tight tracking-tight font-bold text-center py-6 text-slate-700">
        Registration
      </h1>

      <div className="mb-6">
        <label
          className={`block mb-2 text-sm font-medium ${
            errors.email ? 'text-red-600' : 'text-gray-900'
          }`}
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
            errors.email ? 'border-red-600' : 'border-gray-300'
          }`}
          id="email"
          name="email"
          placeholder="name@example.com"
          required
          type="email"
          /* eslint-disable react/jsx-props-no-spreading */
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          className={`block mb-2 text-sm font-medium ${
            errors.fullName ? 'text-red-600' : 'text-gray-900'
          }`}
          htmlFor="fullName"
        >
          Full name
        </label>
        <input
          className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
            errors.fullName ? 'border-red-600' : 'border-gray-300'
          }`}
          id="fullName"
          name="fullName"
          required
          type="text"
          /* eslint-disable react/jsx-props-no-spreading */
          {...register('fullName', { required: 'Full name is required' })}
        />
        {errors.fullName && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.fullName}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          className={`block mb-2 text-sm font-medium ${
            errors.fullName ? 'text-red-600' : 'text-gray-900'
          }`}
          htmlFor="password"
        >
          Password
        </label>
        <input
          className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
            errors.fullName ? 'border-red-600' : 'border-gray-300'
          }`}
          id="password"
          name="password"
          required
          type="password"
          /* eslint-disable react/jsx-props-no-spreading */
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.password}
          </p>
        )}
      </div>

      <button
        className="text-white bg-primary hover:bg-teal-700 ease-in duration-200 focus:ring-4 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        type="submit"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;

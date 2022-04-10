import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useUserMutation } from '../../graphql/user/mutation';

function LoginForm() {
  const navigate = useNavigate();
  const [loginMutation] = useUserMutation();
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm();

  const onSubmit = (values) =>
    loginMutation(values.email, values.password)
      .then(() => navigate('/'))
      .catch(() =>
        setError('email', {
          type: 'custom',
          message: 'Invalid email/password',
        }),
      );

  return (
    <form
      className="w-full px-10 lg:px-0 lg:w-1/2 flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl leading-tight tracking-tight font-bold text-center py-6 text-slate-700">
        Sign in to your account
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
          {...register('email', { required: true })}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            Invalid email / password
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
          id="password"
          name="password"
          required
          type="password"
          /* eslint-disable react/jsx-props-no-spreading */
          {...register('password', { required: true })}
        />
      </div>
      <button
        className="text-white bg-primary hover:bg-teal-700 ease-in duration-200 focus:ring-4 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        type="submit"
      >
        Login
      </button>

      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400" />
        <span className="flex-shrink mx-4 text-gray-400">OR</span>
        <div className="flex-grow border-t border-gray-400" />
      </div>

      <Link
        className="border-secondary border bg-transparent ease-in duration-200 hover:bg-secondary hover:text-white text-secondary font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        to="/register"
      >
        Register
      </Link>
    </form>
  );
}

export default LoginForm;

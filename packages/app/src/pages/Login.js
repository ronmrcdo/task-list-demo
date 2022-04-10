import LoginForm from '../components/Auth/LoginForm';

function Login() {
  return (
    <div className="w-full flex items-stretch justify-center my-20">
      <div className="w-full lg:max-w-4xl flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;

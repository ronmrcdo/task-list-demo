import RegistrationForm from '../components/Auth/RegistrationForm';

function Register() {
  return (
    <div className="w-full flex items-stretch justify-center my-20">
      <div className="w-full lg:max-w-4xl flex items-center justify-center">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default Register;

import PropTypes from 'prop-types';
import { useLogout } from '../../hooks/auth';

function UserInfo({ name }) {
  const logout = useLogout();

  return (
    <div className="flex items-center space-x-4">
      <h3 className="text-white font-bold">Hi {name}</h3>
      <button
        className="bg-secondary text-white rounded-sm py-2 px-3 flex justify-between items-center"
        onClick={logout}
        type="button"
      >
        Log Out
      </button>
    </div>
  );
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserInfo;

import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthToken } from '../hooks/auth';

function PrivateRoute({ children }) {
  const [authToken] = useAuthToken();

  /* eslint-disable react/jsx-props-no-spreading */
  return authToken ? (
    children
  ) : (
    <Navigate
      replace
      state={{
        /* eslint-disable no-restricted-globals */
        path: location.pathname,
      }}
      to="/login"
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;

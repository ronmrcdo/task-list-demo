import { useApolloClient } from '@apollo/react-hooks';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const TOKEN_NAME = 'authToken';

export const useAuthToken = () => {
  const [cookies, setCookie, removeCookie] = useCookies([TOKEN_NAME]);
  const setAuthToken = (authToken) => setCookie(TOKEN_NAME, authToken);
  const removeAuthToken = () => removeCookie(TOKEN_NAME);

  return [cookies[TOKEN_NAME], setAuthToken, removeAuthToken];
};

export const useLogout = () => {
  const navigate = useNavigate();
  const [, , removeAuthToken] = useAuthToken();
  const apolloClient = useApolloClient();

  const logout = async () => {
    await apolloClient.clearStore();
    removeAuthToken();
    navigate('/login');
  };
  return logout;
};

import { gql } from '@apollo/client';
import { useMutation } from '@apollo/react-hooks';
import { useAuthToken } from '../../hooks/auth';

export const MUTATION_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const MUTATION_REGISTER = gql`
  mutation register($email: String!, $password: String!, $fullName: String!) {
    register(email: $email, password: $password, fullName: $fullName) {
      token
    }
  }
`;

export const useUserMutation = () => {
  /* eslint-disable no-unused-vars */
  const [_, setAuthToken, removeAuthToken] = useAuthToken();

  const [loginMutation] = useMutation(MUTATION_LOGIN, {
    onCompleted: (data) => {
      setAuthToken(data.login.token);
    },
  });

  const [registerMutation] = useMutation(MUTATION_REGISTER, {
    onCompleted: (data) => {
      setAuthToken(data.register.token);
    },
  });

  const login = (email, password) => {
    /* eslint-disable no-console */
    removeAuthToken();
    return loginMutation({
      variables: {
        email,
        password,
      },
    });
  };

  const register = (email, password, fullName) => {
    /* eslint-disable no-console */
    removeAuthToken();
    return registerMutation({
      variables: {
        email,
        password,
        fullName,
      },
    });
  };

  return [login, register];
};

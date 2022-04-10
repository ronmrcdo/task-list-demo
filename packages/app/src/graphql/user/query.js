import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { useLogout } from '../../hooks/auth';

export const GET_ME = gql`
  query {
    me {
      email
      fullName
    }
  }
`;

export const useUserQuery = () => {
  const logout = useLogout();
  const [, setUser] = useState();

  const { data, error, loading } = useQuery(GET_ME, {
    onCompleted: (res) => {
      setUser(res.me);
    },
    onError: () => {
      setUser();
      logout();
    },
  });

  return [data, loading, error];
};

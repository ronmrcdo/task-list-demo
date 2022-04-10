import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';

export const GET_TASKS = gql`
  query {
    tasks {
      id
      note
      createdAt
      updatedAt
    }
  }
`;

export const useTasksQuery = () => {
  const { data, refetch } = useQuery(GET_TASKS);

  return [data, refetch];
};

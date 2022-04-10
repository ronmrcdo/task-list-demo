import { gql } from '@apollo/client';
import { useMutation } from '@apollo/react-hooks';

export const MUTATION_CREATE_TASK = gql`
  mutation createTask($note: String!) {
    createTask(note: $note) {
      id
      note
      createdAt
      updatedAt
    }
  }
`;

export const MUTATION_DELETE_TASK = gql`
  mutation deleteTask($id: Int!) {
    deleteTask(id: $id)
  }
`;

export const useTaskMutation = () => {
  const [createMutation] = useMutation(MUTATION_CREATE_TASK);
  const [deleteMutation] = useMutation(MUTATION_DELETE_TASK);

  const createTask = (note) =>
    createMutation({
      variables: {
        note,
      },
    });

  const deleteTask = (id) =>
    deleteMutation({
      variables: {
        id,
      },
    });

  return [createTask, deleteTask];
};

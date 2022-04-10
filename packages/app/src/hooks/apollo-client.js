import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
import { useAuthToken } from './auth';

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

export const authMiddleware = (authToken) =>
  new ApolloLink((operation, forward) => {
    if (authToken) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
    }

    return forward(operation);
  });

const cache = new InMemoryCache();

export const useApolloClient = () => {
  const [authToken] = useAuthToken();
  return new ApolloClient({
    link: authMiddleware(authToken).concat(httpLink),
    cache,
  });
};

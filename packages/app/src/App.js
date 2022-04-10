import { Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApolloClient } from './hooks/apollo-client';
import Layout from './components/Layouts/Layout';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const client = useApolloClient();

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Routes>
          <Route
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
            exact
            path="/"
          />
          <Route element={<Login />} exact path="/login" />
          <Route element={<Register />} exact path="/register" />
        </Routes>
      </Layout>
    </ApolloProvider>
  );
}

export default App;

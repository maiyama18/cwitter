import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { Auth, initialAuth, useAuth } from '../hooks/auth';
import { Header } from './Header';

export const AuthContext = React.createContext<Auth>(initialAuth);

export const App = () => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <div style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
        <Header />
        <Container>hello</Container>
      </div>
    </AuthContext.Provider>
  );
};

import { useEffect, useState } from 'react';
import { firebase } from '../firebase/init';

export interface Auth {
  loading: boolean;
  user: firebase.User | null;
}

export const initialAuth = {
  loading: true,
  user: null,
};

export const useAuth = () => {
  const [auth, setAuth] = useState<Auth>(initialAuth);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setAuth({ loading: false, user });
    });
    return unsubscribe;
  }, []);

  return auth;
};

import * as React from 'react';
import { Dropdown, Icon, Image } from 'semantic-ui-react';
import { firebase } from '../firebase/init';
import { oAuthProvider } from '../firebase/init';
import { AuthContext } from './App';

export const AuthButton = () => {
  const auth = React.useContext(AuthContext);

  if (auth.loading) {
    return <Icon name="spinner" loading={true} />;
  }

  if (auth.user != null) {
    const icon = <Image avatar={true} src={auth.user.photoURL} style={{ height: '2rem', width: '2rem' }} />;
    return (
      <Dropdown icon={icon}>
        <Dropdown.Menu>
          <Dropdown.Item text={'logout'} onClick={() => firebase.auth().signOut()} />
        </Dropdown.Menu>
      </Dropdown>
    );
  } else {
    return (
      <span onClick={() => firebase.auth().signInWithRedirect(oAuthProvider)} style={{ cursor: 'pointer' }}>
        login <Icon name={'github'} />
      </span>
    );
  }
};

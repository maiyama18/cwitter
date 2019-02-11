import * as React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { AuthButton } from './AuthButton';

export const Header = () => {
  return (
    <Menu
      attached={true}
      inverted={true}
      borderless={true}
      size={'huge'}
      color={'orange'}
      style={{ marginBottom: '1rem' }}
    >
      <Container>
        <Menu.Item fitted={'horizontally'}>cwitter</Menu.Item>

        <Menu.Menu position={'right'}>
          <Menu.Item style={{ padding: 0 }}>
            <AuthButton />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

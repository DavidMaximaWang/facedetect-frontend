import React, { memo } from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default memo(function NavBar({ setFormOpen }) {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Face Detect
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='Login' />
          <Button basic inverted content='Register' style={{ marginLeft: '0.5em' }} />
        </Menu.Item>
      </Container>
    </Menu>
  );
});

import React, { useState, memo } from 'react';
import { Container } from 'semantic-ui-react';
import Dashboard from '../../features/dashboard/Dashboard';
import NavBar from '../../features/nav/NavBar';

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <Dashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default memo(App);

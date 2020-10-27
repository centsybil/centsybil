import React from 'react';
import BudgetsView from './Components/BudgetsView';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import dummyData from './dummyData.js';

function App() {
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='#home'>centSybil</Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#logout'>Logout</Nav.Link>
        </Nav>
      </Navbar>
      <BudgetsView budgetData={dummyData} />;
    </>
  );
}

export default App;

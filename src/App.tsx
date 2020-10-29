import React, { useContext } from 'react';
import Authentication from './Components/Authentication';
import BudgetsView from './Components/BudgetsView';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Context } from './ContextProvider';
import dummyData from './dummyData';

function App() {
  const { userData } = useContext(Context);
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='#home'>centSybil</Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Link href='#about'>About</Nav.Link>
          {userData.username && <Nav.Link href='#logout'>Logout</Nav.Link>}
        </Nav>
      </Navbar>
      <div className='container mx-auto my-5 d-flex flex-column align-items-center justify-content-center border rounded shadow'>
        <img src='/centSybilLogo.png'></img>
        {userData.username ? (
          <BudgetsView budgetData={userData} />
        ) : (
          <Authentication />
        )}
      </div>
    </>
  );
}

export default App;

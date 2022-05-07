import React from 'react';
// import logo from '../../assets/img/logo.svg';
// import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import Navbar from './components/Navbar'
import Login from './components/Login'
import MemoryRouter from 'react-router-dom/MemoryRouter';
import Route from 'react-router-dom/Route';

const Popup = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="containor">
          <MemoryRouter>
            <Route path='/' component={Login} />
          </MemoryRouter>
      </div>
    </div>
  );
};

export default Popup;

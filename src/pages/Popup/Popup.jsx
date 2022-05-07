import React from 'react';
import Navbar from './components/Navbar'
import './Popup.css';
import { MemoryRouter } from 'react-router-dom';

const Popup = () => {
  return (
    <div className="App">
      <Navbar />
      <MemoryRouter>
          
      </MemoryRouter>
    </div>
  );
};

export default Popup;

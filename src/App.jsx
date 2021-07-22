import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './App.css';

import { Menu } from 'react-ionicons';

import Nav from './components/Navigator/Nav';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <header className="header">
        <Link to="#header" className="header__logo">EHOTO</Link>

        <Menu
          cssClasses="header__toggle"
          color="var(--white-color)"
          onClick={() => setMenuActive(true)}
          style={{ display: 'flex' }}
        />

        <Nav
          active={menuActive}
          onClick={setMenuActive}
        />
      </header>
    </>
  );
}

export default App;

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import './App.css';

import {
  Menu,
  Close,
  LibraryOutline,
  LogoGithub,
  LogoGoogle,
} from 'react-ionicons';

const NavMenu = styled.nav`
  background: ${(props) => props.color};
`;

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [menuItemActive, setMenuItemActive] = useState({ item: '' });

  return (
    <>
      <header className="header">
        <Link to="#header" className="header__logo">EHOTO</Link>

        <Menu
        // nav-toggle
          cssClasses="header__toggle"
          color="var(--white-color)"
          onClick={() => setMenuActive(true)}
        />

        <nav
          id="nav-menu"
          className={`nav ${menuActive ? 'show' : ''}`}
        >
          <div className="nav__content bd-grid">
            <Close
              cssClasses="nav__close"
              color="var(--white-color)"
              onClick={() => setMenuActive(false)}
            />

            <div className="nav__perfil">
              <div className="nav__img">
                <img src="../public/images/perfil.png" alt="" />
              </div>

              <div>
                <Link to="#name" className="nav__name">EHOTO</Link>
                <span className="nav__profession">Front Developer</span>
              </div>
            </div>

            <div className="nav__menu">
              <ul className="nav__list">
                {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                  <li
                    key={item}
                    className={`nav__item ${menuItemActive === item ? 'active' : ''}`}
                  >
                    <Link
                      to={`#${item}`}
                      className="nav__link"
                      onClick={() => setMenuActive({ item })}
                    >
                      { item }
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__social">
              <Link to="#tistory" className="nav__social-icon">
                <LibraryOutline
                  title="Tistory"
                  color="var(--white-color)"
                />
              </Link>
              <Link to="#github" className="nav__social-icon">
                <LogoGithub
                  title="Github"
                  color="var(--white-color)"
                />
              </Link>
              <Link to="#gmail" className="nav__social-icon">
                <LogoGoogle
                  title="Gmail"
                  color="var(--white-color)"
                />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default App;

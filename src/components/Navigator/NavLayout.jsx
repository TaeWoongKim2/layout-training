import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  Close,
  LibraryOutline,
  LogoGithub,
  LogoGoogle,
} from 'react-ionicons';

export default function NavLayout({
  onClick,
}) {
  const [menuItemActive, setMenuItemActive] = useState({ item: '' });

  return (
    <div className="nav__content bd-grid">
      <div className="nav__toggle">
        <Close
          cssClasses="nav__close"
          color="var(--white-color)"
          onClick={() => onClick(false)}
        />
      </div>

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
                onClick={() => setMenuItemActive({ item })}
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
  );
}

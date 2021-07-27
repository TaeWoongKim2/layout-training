import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  HomeOutline,
  BulbOutline,
  CodeSlashOutline,
  QrCodeOutline,
  CafeOutline,
} from 'react-ionicons';

export default function Portfolio() {
  const [bottomNav, setBottomNav] = useState({
    about: {
      title: 'About',
      link: '#about',
      icon: <BulbOutline color="inherit" />,
      active: false,
    },
    skills: {
      title: 'Skills',
      link: '#skills',
      icon: <CodeSlashOutline color="inherit" />,
      active: false,
    },
    home: {
      title: 'Home',
      link: '#home',
      icon: <HomeOutline color="inherit" />,
      active: true,
    },
    portfolio: {
      title: 'Portfolio',
      link: '#portfolio',
      icon: <QrCodeOutline color="inherit" />,
      active: false,
    },
    contact: {
      title: 'Contact',
      link: '#contact',
      icon: <CafeOutline color="inherit" />,
      active: false,
    },
  });

  function handleClick(item) {
    setBottomNav({ item });
  }

  return (
    <>
      <ul className="bottom__nav">
        <span className="bottom__nav__indicator" />
        {Object.keys(bottomNav).map((navItem) => {
          const {
            key, link, title, icon, active,
          } = bottomNav[navItem];

          return (
            <li key={key}>
              <Link
                to={`${link}`}
                className={`${active ? 'bottom__nav__item__active' : ''}`}
                onClick={() => handleClick(key)}
              >
                {icon}
                <span className="bottom__nav__title">{title}</span>
              </Link>
            </li>
          );
        })}
        {/* <li>
          <a href="#about">
            <BulbOutline color="inherit" />
            <span className="bottom__nav__title">About</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <CodeSlashOutline color="inherit" />
            <i className="bx bx-code-curly" />
            <span className="bottom__nav__title">Skills</span>
          </a>
        </li>
        <li>
          <a href="#home" className="bottom__nav__item__active">
            <HomeOutline color="inherit" />
            <span className="bottom__nav__title">Home</span>
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <QrCodeOutline color="inherit" />
            <span className="bottom__nav__title">Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <CafeOutline color="inherit" />
            <span className="bottom__nav__title">Contact</span>
          </a>
        </li> */}
      </ul>
    </>
  );
}

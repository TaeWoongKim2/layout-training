import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  HomeOutline,
  BulbOutline,
  CodeSlashOutline,
  QrCodeOutline,
  CafeOutline,
} from 'react-ionicons';

const defaultBottomNav = {
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
    active: false,
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
};

const changeNavActive = (item) => ({
  ...defaultBottomNav,
  [item]: {
    ...defaultBottomNav[item],
    active: true,
  },
});

export default function Portfolio() {
  const [bottomNav, setBottomNav] = useState(
    changeNavActive('home'),
  );

  function handleClick(item) {
    const newBottonNav = changeNavActive(item);
    setBottomNav(newBottonNav);
  }

  return (
    <>
      <ul className="bottom__nav">
        <span className="bottom__nav__indicator" />
        {Object.keys(bottomNav).map((nav) => {
          const {
            link, title, icon, active,
          } = bottomNav[nav];

          return (
            <li key={nav}>
              <Link
                to={`${link}`}
                className={`${active ? 'bottom__nav__item__active' : ''}`}
                onClick={() => handleClick(nav)}
              >
                {icon}
                <span className="bottom__nav__title">{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

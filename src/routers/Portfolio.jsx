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

const changeActiveNav = (item) => ({
  ...defaultBottomNav,
  [item]: {
    ...defaultBottomNav[item],
    active: true,
  },
});

const findIndexOfActiveNav = (navigator) => {
  const navItems = Object.keys(navigator);
  const activeNavIndex = navItems.findIndex((key) => navigator[key].active) + 1;
  return activeNavIndex;
};

export default function Portfolio() {
  const [bottomNav, setBottomNav] = useState(
    changeActiveNav('home'),
  );

  const activeIndex = findIndexOfActiveNav(bottomNav);

  function handleClick(item) {
    const newBottonNav = changeActiveNav(item);
    setBottomNav(newBottonNav);
  }

  return (
    <>
      <ul className="bottom__nav">
        <span
          className="bottom__nav__indicator"
          style={{ left: `calc(${activeIndex * 120 - 60}px - 45px)` }}
        />
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

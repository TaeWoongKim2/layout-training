import React from 'react';

import { Link } from 'react-router-dom';

import { Menu } from 'react-ionicons';

export default function HeaderContent({
  logo,
  onClick,
}) {
  return (
    <>
      <Link to="/" className="header__logo">{logo}</Link>

      <Menu
        cssClasses="header__toggle"
        color="var(--white-color)"
        onClick={() => onClick(true)}
      />
    </>
  );
}

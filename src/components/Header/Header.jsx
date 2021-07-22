import React, { useState } from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { Menu } from 'react-ionicons';

import Nav from '../Navigator/Nav';

const StyledHeader = styled.header.attrs((props) => ({
  className: props.className,
}))``;

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <StyledHeader
      className="header"
    >
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
    </StyledHeader>
  );
}

import React from 'react';

import styled from 'styled-components';

import NavContent from './NavContent';

const StyledNav = styled.nav.attrs((props) => ({
  id: props.id,
  className: props.className,
}))``;

export default function NavMenu({
  active,
  onClick,
}) {
  return (
    <StyledNav
      id="nav-menu"
      className={`nav ${active ? 'show' : ''}`}
    >
      <NavContent onClick={onClick} />
    </StyledNav>
  );
}

import React, { useState } from 'react';

import styled from 'styled-components';

import HeaderContent from './HeaderContent';
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
      <HeaderContent onClick={setMenuActive} />

      <Nav
        active={menuActive}
        onClick={setMenuActive}
      />
    </StyledHeader>
  );
}

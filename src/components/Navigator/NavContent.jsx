import React from 'react';

import styled from 'styled-components';

import NavToggle from './NavToggle';
import NavProfile from './NavProfile';
import NavMenu from './NavMenu';
import NavSocial from './NavSocial';

const StyledNavContent = styled.div.attrs((props) => ({
  className: props.className,
}))``;

export default function NavContent({
  onClick,
}) {
  return (
    <StyledNavContent
      className="nav__content bd-grid"
    >
      <NavToggle onClick={onClick} />

      <NavProfile
        author="EHOTO"
        profession="Front Developer"
      />

      <NavMenu
        menus={['Home', 'About', 'Skills', 'Portfolio', 'Contact']}
      />

      <NavSocial />
    </StyledNavContent>
  );
}

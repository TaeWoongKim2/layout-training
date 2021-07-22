import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import {
  LibraryOutline,
  LogoGithub,
  LogoGoogle,
} from 'react-ionicons';

const StyledNavSocial = styled.div.attrs((props) => ({
  className: props.className,
}))``;

export default function NavSocial() {
  return (
    <StyledNavSocial
      className="nav__social"
    >
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
    </StyledNavSocial>
  );
}

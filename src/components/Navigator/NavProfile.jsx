import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

const StyledNavProfile = styled.div.attrs((props) => ({
  className: props.className,
}))``;

export default function NavProfile({
  author,
  profession,
}) {
  return (
    <StyledNavProfile
      className="nav__perfil"
    >
      <div className="nav__img">
        <img src="../public/images/perfil.png" alt="profile" />
      </div>

      <div>
        <Link to="#name" className="nav__name">{author}</Link>
        <span className="nav__profession">{profession}</span>
      </div>
    </StyledNavProfile>
  );
}

import React from 'react';

import styled from 'styled-components';

import { Close } from 'react-ionicons';

const StyledNavToggle = styled.div.attrs((props) => ({
  className: props.className,
}))``;

export default function NavToggle({
  onClick,
}) {
  return (
    <StyledNavToggle
      className="nav__toggle"
    >
      <Close
        cssClasses="nav__close"
        color="var(--white-color)"
        onClick={() => onClick(false)}
      />
    </StyledNavToggle>
  );
}

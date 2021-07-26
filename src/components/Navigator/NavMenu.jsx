import React, { useState } from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

const StyledNavMenu = styled.div.attrs((props) => ({
  className: props.className,
}))``;

export default function NavMenu({
  menus = ['Home', 'About', 'Skills', 'Portfolio', 'Contact'],
  onClose,
}) {
  const [menuItemActive, setMenuItemActive] = useState({ item: '' });

  return (
    <StyledNavMenu
      className="nav__menu"
    >
      <ul className="nav__list">
        {menus.map((item) => (
          <li
            key={item}
            className={`nav__item ${menuItemActive.item === item ? 'active' : ''}`}
          >
            <Link
              to={`/${item.toLowerCase()}`}
              className="nav__link"
              onClick={() => {
                setMenuItemActive({ item });
                onClose();
              }}
            >
              { item }
            </Link>
          </li>
        ))}
      </ul>
    </StyledNavMenu>
  );
}

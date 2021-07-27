import React from 'react';

import {
  HomeOutline,
  BulbOutline,
  CodeSlashOutline,
  QrCodeOutline,
  CafeOutline,
} from 'react-ionicons';

export default function Portfolio() {
  return (
    <>
      <ul className="bottom__nav">
        <span className="bottom__nav__indicator" />
        <li>
          <a href="#home">
            <HomeOutline color="inherit" />
            <span className="bottom__nav__title">Home</span>
          </a>
        </li>
        <li>
          <a href="#about">
            <BulbOutline color="inherit" />
            <span className="bottom__nav__title">About</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <CodeSlashOutline color="inherit" />
            <i className="bx bx-code-curly" />
            <span className="bottom__nav__title">Skills</span>
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <QrCodeOutline color="inherit" />
            <span className="bottom__nav__title">Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <CafeOutline color="inherit" />
            <span className="bottom__nav__title">Contact</span>
          </a>
        </li>
      </ul>
    </>
  );
}

import React from 'react';

import {
  HomeOutline,
  FingerPrintOutline,
  CodeSlashOutline,
  QrCodeOutline,
  PhonePortraitOutline,
} from 'react-ionicons';

export default function Portfolio() {
  return (
    <>
      <div className="workspace">
        <ul className="bottom__nav">
          <span className="bottom__nav__indicator" />
          <li>
            <a href="#home">
              <HomeOutline color="#00000" />
              <span className="bottom__nav__title">Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <FingerPrintOutline color="#00000" />
              <span className="bottom__nav__title">About</span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <CodeSlashOutline color="#00000" />
              <i className="bx bx-code-curly" />
              <span className="bottom__nav__title">Skills</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <QrCodeOutline color="#00000" />
              <span className="bottom__nav__title">Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <PhonePortraitOutline color="#00000" />
              <span className="bottom__nav__title">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

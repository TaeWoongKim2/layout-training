import React from 'react';

export default function Portfolio() {
  return (
    <>
      <h2>Portfolio!</h2>

      <div className="workspace">
        <ul className="bottom__nav">
          <span className="bottom__nav__indicator" />
          <li>
            <a href="#home">
              <i className="bx bx-home" />
              Home
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="bx bx-about" />
              About
            </a>
          </li>
          <li>
            <a href="#skills">
              <i className="bx bx-skill" />
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <i className="bx bx-portfolio" />
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="bx bx-contact" />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

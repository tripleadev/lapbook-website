import React, { useState } from 'react';
import Link from 'next/link';
import './Header.scss';

const Header = ({ siteTitle }) => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
    <header>
      <div className="header">
        <Link href="/" className="link">
          <a>{siteTitle}</a>
        </Link>
        <button
          className="menuIcon"
          onClick={() => {
            setMenuOpened(isMenuOpened ? false : true);
            document.body.style.overflow = isMenuOpened ? 'auto' : 'hidden';
          }}>
          <div className={`bar ${isMenuOpened ? 'bar--menu-opened' : 'bar--menu-closed'}`}></div>
        </button>
        <ul className={`list ${isMenuOpened ? 'list--opened' : 'list--closed'}`}>
          <li>
            <Link
              href="/"
              onClick={() => {
                document.body.style.overflow = 'auto';
              }}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={() => {
                document.body.style.overflow = 'auto';
              }}>
              <a>Temat 1</a>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={() => {
                document.body.style.overflow = 'auto';
              }}>
              <a>Temat 2</a>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={() => {
                document.body.style.overflow = 'auto';
              }}>
              <a>Temat 3</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

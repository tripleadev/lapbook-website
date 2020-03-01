import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Hamburger from '../Hamburger/Hamburger';
import './Navigation.scss';

const Navigation = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isMenuOpened ? 'hidden' : 'auto';
  });

  return (
    <>
      <div
        className="nav-button"
        onClick={() => {
          setMenuOpened(isMenuOpened ? false : true);
        }}>
        <Hamburger isMenuOpened={isMenuOpened} />
      </div>
      <div className={`list ${isMenuOpened ? 'list--opened' : 'list--closed'}`}>
        <h1>Lapbook</h1>
        <nav className="navigation">
          <Link href="/rodzaju">
            <a>Księga Rodzaju</a>
          </Link>
          <Link href="/koheleta">
            <a>Księga Koheleta</a>
          </Link>
          <Link href="/hioba">
            <a>Księga Hioba</a>
          </Link>
          <Link href="/przeklady">
            <a>Przekłady Biblii</a>
          </Link>
          <Link href="/postaci-symbole">
            <a>Postaci i symbole</a>
          </Link>
          <Link href="/quiz">
            <a>Quiz</a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navigation;

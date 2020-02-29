import React, { useState } from 'react';
import Link from 'next/link';
import Hamburger from '../Hamburger/Hamburger';
import './Navigation.scss';

const Navigation = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <div
        className="nav-button"
        onClick={() => {
          setMenuOpened(isMenuOpened ? false : true);
          document.body.style.overflow = isMenuOpened ? 'auto' : 'hidden';
        }}>
        <Hamburger isMenuOpened={isMenuOpened} />
      </div>
      <div className={`list ${isMenuOpened ? 'list--opened' : 'list--closed'}`}>
        <h1>Lapbook</h1>
        <nav className="navigation">
          <Link href="/rodzaju">
            <a>Księga Rodzaju</a>
          </Link>
          <Link href="/przeklady">
            <a>Przekłady Biblii</a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navigation;

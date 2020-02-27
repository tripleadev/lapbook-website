import React, { useState } from 'react';
import Link from 'next/link';
import './Button.scss';

const Button = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <div
        className="nav-button"
        onClick={() => {
          setMenuOpened(isMenuOpened ? false : true);
          document.body.style.overflow = isMenuOpened ? 'auto' : 'hidden';
        }}>
        <div className={`bar ${isMenuOpened ? 'bar--menu-opened' : 'bar--menu-closed'}`}></div>
      </div>
      <div className={`list ${isMenuOpened ? 'list--opened' : 'list--closed'}`}>
        <h1>Lapbook</h1>
        <nav className="navigation">
          <Link href="/rodzaju">
            <a>Księga rodzaju</a>
          </Link>
          <Link href="/psalmy">
            <a>Księga psalmów</a>
          </Link>
          <Link href="/kohaleta">
            <a>Księga koheleta</a>
          </Link>
          <Link href="/ewangelie">
            <a>Ewangelie</a>
          </Link>
          <Link href="/apokalipsa">
            <a>Apokalipsa</a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Button;

import React from 'react';
import Link from 'next/link';
import './Header.scss';

const Header = () => {
  function click() {
    var x = document.getElementById('header');
    if (x.className === 'topnav') {
      x.className += 'responsive';
    } else {
      x.className = 'header';
    }
  }

  return (
    <header id="header" className="header">
      <Link href="/">
        <a className="active">Home</a>
      </Link>
      <Link href="/">
        <a>Temat 1</a>
      </Link>
      <Link href="/">
        <a>Temat 2</a>
      </Link>
      <Link href="/">
        <a>Temat 3</a>
      </Link>
      <Link href="/">
        <a className="icon" onClick="click()">
          &#9776;
        </a>
      </Link>
    </header>
  );
};

export default Header;

import React from 'react';
import Link from 'next/link';
import styles from './Header.scss';

const Header = () => {
  const header = React.createRef();

  const click = e => {
    if (x.className === 'topnav') {
      x.className += 'responsive';
    } else {
      x.className = 'header';
    }
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.active}>Home</a>
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
        <a className={styles.icon} onClick={click}>
          &#9776;
        </a>
      </Link>
    </header>
  );
};

export default Header;

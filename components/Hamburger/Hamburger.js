import React from 'react';
import './Hamburger.scss';

const Hamburger = ({ isMenuOpened }) => (
  <div className={`bar ${isMenuOpened ? 'bar--menu-opened' : 'bar--menu-closed'}`} />
);

export default Hamburger;

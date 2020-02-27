import React from 'react';
import './Header.scss';

const Header = ({ title }) => (
  <div className="header">
    <img src="https://cdn.pixabay.com/photo/2016/03/16/09/20/abraham-1260073_960_720.jpg" />
    <h1>{title}</h1>
  </div>
);

export default Header;

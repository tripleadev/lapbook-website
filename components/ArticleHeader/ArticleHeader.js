import React from 'react';
import './ArticleHeader.scss';
import Navigation from '../Navigation/Navigation';

const ArticleHeader = ({ title, img, credit }) => (
  <>
    <div className="header">
      <img className="background" src={img} />
      <h1>{title}</h1>
      <i>
        <img src="https://www.pngkey.com/png/full/10-104955_camera-icon-white-small-camera-icon-white-png.png" />
        {credit}
      </i>
    </div>
    <Navigation />
  </>
);

export default ArticleHeader;

import React from 'react';
import './ArticleHeader.scss';
import Navigation from '../Navigation/Navigation';

const ArticleHeader = ({ title, img }) => (
  <>
    <div className="header">
      <img src={img} />
      <h1>{title}</h1>
    </div>
    <Navigation />
  </>
);

export default ArticleHeader;

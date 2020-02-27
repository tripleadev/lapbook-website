import React from 'react';
import './ArticleHeader.scss';
import Navigation from '../Navigation/Navigation';

const ArticleHeader = ({ title }) => (
  <>
    <div className="header">
      <img src="https://cdn.pixabay.com/photo/2016/03/16/09/20/abraham-1260073_960_720.jpg" />
      <h1>{title}</h1>
    </div>
    <Navigation />
  </>
);

export default ArticleHeader;

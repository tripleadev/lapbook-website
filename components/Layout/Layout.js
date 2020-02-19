import React from 'react';
import Head from 'next/head';
import './Layout.scss';

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div>{children}</div>
  </>
);

export default Layout;

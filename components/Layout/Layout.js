import React from 'react';
import Head from 'next/head';
import './Layout.scss';
import Header from '../Header/Header';

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header siteTitle="Lapbook" />
    <main>{children}</main>
  </>
);

export default Layout;

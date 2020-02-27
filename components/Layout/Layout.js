import React from 'react';
import Head from 'next/head';
import './Layout.scss';
import Button from '../Navigation/Button';

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title ? `${title} ‧ ` : ''}Lapbook</title>
    </Head>
    <main>{children}</main>
    <Button />
    <footer>
      <i>
        Lapbook stworzony przez Mateusza Dobrzyńskeigo, Adama Siekierskiego i Artura Dudka. Strona
        stworzona przez Artura i Adama.
      </i>
    </footer>
  </>
);

export default Layout;

import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import '../components/IndexPage/IndexPage.scss';

const IndexPage = () => (
  <Layout>
    <div className="container">
      <h1>Lapbook</h1>
      <nav className="navigation">
        <Link href="/rodzaju">
          <a>Księga rodzaju</a>
        </Link>
        <Link href="/psalmy">
          <a>Księga psalmów</a>
        </Link>
        <Link href="/kohaleta">
          <a>Księga koheleta</a>
        </Link>
        <Link href="/ewangelie">
          <a>Ewangelie</a>
        </Link>
        <Link href="/apokalipsa">
          <a>Apokalipsa</a>
        </Link>
      </nav>
    </div>
  </Layout>
);

export default IndexPage;

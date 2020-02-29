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
          <a>Księga Rodzaju</a>
        </Link>
        <Link href="/przeklady">
          <a>Przekłady Biblii</a>
        </Link>
      </nav>
    </div>
  </Layout>
);

export default IndexPage;

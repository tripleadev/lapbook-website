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
        <Link href="/kohaleta">
          <a>Księga Koheleta</a>
        </Link>
        <Link href="/hioba">
          <a>Księga Hioba</a>
        </Link>
        <Link href="/przeklady">
          <a>Przekłady Biblii</a>
        </Link>
        <Link href="/quiz">
          <a>Quiz</a>
        </Link>
      </nav>
    </div>
  </Layout>
);

export default IndexPage;

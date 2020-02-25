import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import styles from '../components/IndexPage/IndexPage.scss';

const IndexPage = () => (
  <Layout title="Lapbook">
    <div className={styles.container}>
      <h1>Lapbook</h1>
      <nav className={styles.navigation}>
        <Link href="/">
          <a>Księga rodzaju</a>
        </Link>
        <Link href="/">
          <a>Księga psalmów</a>
        </Link>
        <Link href="/">
          <a>Księga koheleta</a>
        </Link>
        <Link href="/">
          <a>Ewangelie</a>
        </Link>
        <Link href="/">
          <a>Apokalipsa</a>
        </Link>
      </nav>
    </div>
  </Layout>
);

export default IndexPage;

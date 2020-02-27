import React from 'react';
import Layout from '../components/Layout/Layout';
import '../components/Books/BookPage.scss';
import Header from '../components/ArticleHeader/ArticleHeader';

const Rodzaju = () => (
  <Layout title="Księga Rodzaju">
    <Header title="Księga Rodzaju" />
    <div className="wrapper">
      <q>Oto przykładowy cytat.</q>
      <h2>Lorem Ipsum, fajne coś</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ipsa eligendi, corrupti omnis
        quia laudantium saepe libero dolorem ipsum possimus explicabo architecto necessitatibus id
        eveniet cumque totam unde autem voluptatum perferendis quae cum! Qui, cupiditate accusamus
        optio quidem voluptatum dolores minus et dolor vero, veniam, autem voluptate. Cupiditate
        autem sunt doloribus consectetur dolorum esse veritatis deserunt. Sint laudantium placeat
        minus est adipisci pariatur, aperiam, necessitatibus et a iure aspernatur dolores omnis
        eveniet obcaecati culpa esse nam perferendis tempora praesentium soluta aut dicta. Velit
        quis, odio, eligendi soluta aut nobis libero dignissimos facilis sint iusto fuga maxime,
        delectus dicta praesentium sed.
      </p>
    </div>
  </Layout>
);

export default Rodzaju;

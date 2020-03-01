import React from 'react';
import Layout from '../components/Layout/Layout';
import '../components/Books/BookPage.scss';
import Header from '../components/ArticleHeader/ArticleHeader';

const Rodzaju = () => (
  <Layout title="Księga Hioba">
    <Header
      title="Księga Hioba"
      img="https://i.imgur.com/P8JsqYN.jpg"
      credit={
        <a href="https://pl.wikipedia.org/wiki/Gerard_Seghers#/media/Plik:Seghersjob.jpg">
          Wikipedia - Gerard Seghers, Cierpiący Hiob
        </a>
      }
    />
    <div className="wrapper">
      <q>I rzekł Pan do szatana: «Oto jest w twej mocy. Życie mu tylko zachowaj!»</q>
      <br />
      <i>~Hi 2,6</i>
      <h2>Księga Hioba w pigułce</h2>
      <p>
        <ul>
          <li>Datowana na V w. p.n.e. </li>
          <li>Porusza temat niezawinionego cierpienia i istnienia zła na świecie</li>
        </ul>
      </p>
      <h2>Pojęcia i definicje</h2>
      <p>
        <b>Teodycea</b> – dziedzina teologii zajmująca się konfliktem między ideą miłosiernego Boga
        a istnieniem zła.
      </p>
      <i>
        Bibliografia:
        <br />
        Wersety zostały zaczerpnięte z <a href="https://biblia.deon.pl/">Biblii Tysiąclecia</a>.
        wyd. Pallottinum w Poznaniu, 2003
      </i>
    </div>
  </Layout>
);

export default Rodzaju;

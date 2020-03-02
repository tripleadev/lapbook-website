import React from 'react';
import Layout from '../components/Layout/Layout';
import '../components/Books/BookPage.scss';
import Header from '../components/ArticleHeader/ArticleHeader';

const Biblizmy = () => (
  <Layout title="Biblizmy">
    <Header
      title="Biblizmy"
      img="https://upload.wikimedia.org/wikipedia/commons/e/ed/Nuremberg_chronicles_f_21r.png"
      credit={
        <a href="https://pl.wikipedia.org/wiki/Sodoma_i_Gomora#/media/Plik:Nuremberg_chronicles_f_21r.png">
          Wikipedia - Ucieczka Lota z rodziną z Sodomy
        </a>
      }
    />
    <div className="wrapper">
      <h2>Biblizmy</h2>
      <p>
        Wiele utrwalonych frazeologizmów, powstały pod wpływem tekstów biblijnych. Oto niektóre z
        nich:
      </p>
      <ul>
        <li>
          <b>Zamienić się w słup soli</b> - zastygnąć z przerażenia lub zdumienia
        </li>
        <li>
          <b>Ciemności egejskie</b> - nieprzenikniona ciemność
        </li>
        <li>
          <b>Sól ziemi</b> - najbardziej wartościowi ludzie spośród jakiejś zbiorowości.
        </li>
        <li>
          <b>Niebieski ptak</b> - człowiek lekkomyślny, próżniak, darmozjad
        </li>
        <li>
          <b>Rzucać perły przed wieprze</b> - dawać komuś coś cennego, czego on nie umie ocenić
        </li>
        <li>
          <b>Umywać ręce</b> - zrzucić z siebie odpowiedzialność
        </li>
        <li>
          <b>Nie rzucać słów na wiatr</b> - mówić coś w sposów odpowiedzialny, dotrzymywać słowa
        </li>
      </ul>
    </div>
  </Layout>
);

export default Biblizmy;

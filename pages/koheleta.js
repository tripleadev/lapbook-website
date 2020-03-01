import React from 'react';
import Layout from '../components/Layout/Layout';
import '../components/Books/BookPage.scss';
import Header from '../components/ArticleHeader/ArticleHeader';

const Rodzaju = () => (
  <Layout title="Księga Koheleta">
    <Header
      title="Księga Koheleta"
      img="https://static.epodreczniki.pl/portal/f/res-minimized/R1YOCuaAD7g3d/3/2IFTLsgK3wVkqm4i1A7BCdD9MXZ60aDG.jpg"
      credit={
        <a href="https://en.wikipedia.org/wiki/Vanitas#/media/File:Pier_Francesco_Cittadini_Vanitas-Stillleben.jpg">
          Wikipedia - Pierfrancesco Cittadini, Vanitas
        </a>
      }
    />
    <div className="wrapper">
      <q>Vanitas vanitatum et omnia vanitas.</q>
      <br />
      <i>~Koh 1,2</i>
      <h2>Księga Koheleta w pigułce</h2>
      <ul>
        <li>Jedna z ksiąg mądrościowych</li>
        <li>Napisana między III a II w. p.n.e.</li>
        <li>Jej motywem przewodnim jest doczesność i przemijanie</li>
        <li>
          Tradycyjnie autorstwo przypisuje się Salomonowi <i>(Koh 1,1)</i>
        </li>
      </ul>
      <h2>Pojęcia i definicje</h2>
      <p>
        <b>Vanitas</b> – motyw w sztuce i religii, pełen symboliki, skupiający się na przemijaniu.
        Typowe elementy vanitas to m.in. <b>czaszka, przewrócony kielich, klepsydra</b>.
        <br />
        <b>Kohelet</b> – określenie mówcy albo mędrca.
      </p>
      <i>
        Bibliografia:
        <br />
        Wersety zostały zaczerpnięte z <a href="https://biblia.deon.pl/">Biblii Tysiąclecia</a>.
        wyd. Pallottinum w Poznaniu, 2003
      </i>
    </div>
  </Layout>
);

export default Rodzaju;

import React from 'react';
import Layout from '../components/Layout/Layout';
import '../components/Books/BookPage.scss';
import Header from '../components/ArticleHeader/ArticleHeader';

const Rodzaju = () => (
  <Layout title="Księga Psalmów">
    <Header
      title="Księga Psalmów"
      img="https://i.imgur.com/o1RXVhj.jpg"
      credit={<a href="https://unsplash.com/photos/k9w2Lxp-2SM">Unsplash - by anniespratt</a>}
    />
    <div className="wrapper">
      <q>Naucz nas liczyć dni nasze, abyśmy osiągnęli mądrość serca.</q>
      <br />
      <i>~Ps 103,12</i>
      <h2>Księga Psalmów w pigułce</h2>
      <ul>
        <li>Składa się ze 150 psalmów</li>
        <li>
          Pisane między XI a III w. p.n.e. przez różnych ludzi (tradycyjnie ich autorstwo przypisuje
          się Dawidowi, synowi Jessego)
        </li>
        <li>
          Każdy psalm jest modlitwą, w której podmiot liryczny zwraca się bezpośrednio do Boga,
          używając apostrof i uroczystego języka
        </li>
      </ul>
      <h2>Pojęcia i definicje</h2>
      <p>
        <b>Psalm</b> – gatunek liryczny wywodzący się ze starego testamentu. Cechuje go podniosły
        styl. Może mieć charakter dziękczynny, pochwalny, błagalny, mądrościowy lub prorocki.
        <br />
        <b>Psałterz</b> – Zbiór psalmów znajdujących się w Starym Testamencie.
      </p>
      <h2>Psalmy współcześnie</h2>
      <p>
        Psalm to przede wszystkim modlitwa, ale również pieśń. Z tego powodu, poszczególne psalmy
        doczekały się wielu aranżacji, również tych współczesnych.
        <br />
        <a href="https://www.youtube.com/watch?v=e3t3-uIb1u8">
          TGD – Błogosław duszo moja Pana
        </a>{' '}
        – utwór jest dość bezpośrednim odniesieniem do psalmu 103.
        <br />
        <a href="https://www.youtube.com/watch?v=_e1pADu6VvI">
          Maria Peszek – Pan nie jest moim pasterzem
        </a>{' '}
        – utwór będący oczywistym zaprzeczeniem psalmu 23.
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

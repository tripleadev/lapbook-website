import React from 'react';
import Layout from '../components/Layout/Layout';
import '../components/Books/BookPage.scss';
import Header from '../components/ArticleHeader/ArticleHeader';

const Rodzaju = () => (
  <Layout title="Księga Rodzaju">
    <Header
      title="Księga Rodzaju"
      img="https://i.imgur.com/w9UnyEw.jpg"
      credit={
        <a href="https://pl.wikipedia.org/wiki/Adam_i_Ewa_(obraz_Tycjana)">
          Wikipedia - Adam i Ewa (obraz Tycjana)
        </a>
      }
    />
    <div className="wrapper">
      <q>Wtedy Bóg rzekł: «Niechaj się stanie światłość!» I stała się światłość.</q>
      <br />
      <i>~Rdz 1,3</i>
      <h2>Księga Rodzaju w pigułce</h2>
      <p>
        <ul>
          <li>Pierwsza księga zarówno Starego Testamentu, jak i tzw. Tory</li>
          <li>Tradycyjnie autorstwo przypisuje się Mojżeszowi na przełomie XIII i XII w. p.n.e.</li>
          <li>
            Klasyczny tytuł pochodzi z języka greckiego („Genesis”) i jest wzorowany na hebrajskiej
            nazwie księgi, pochodzącej od słowa „Bereshit”. Oznacza ono „na początku” i otwiera
            księgę Rodzaju. Polski tytuł znajduje źródło w XV-wiecznym tłumaczeniu i pochodzi od
            słowa „Rodzaj” lub „Ród”.
          </li>
        </ul>
      </p>
      <h2>Pojęcia i definicje</h2>
      <p>
        <b>Tora</b> – inna nazwa na Pięcioksiąg Mojżeszowy, w którego skład wchodzi pięć pierwszych
        ksiąg Starego Testamentu. Jego autorstwo tradycyjnie przypisuje się Mojżeszowi.
      </p>
      <h2>Księga Rodzaju współcześnie</h2>
      <p>
        Grupa Filmowa Darwin, stworzyła serię krótkometrażowych filmów p.t. „Wielkie Konflikty”,
        przedstawiającą zatargi postaci znanych z literatury i popkultury. W wielu odcinkach
        przedstawione zostały sceny z Biblii, również te z księgi Rodzaju.
        <br />
        <a href="https://www.youtube.com/watch?v=jiVb2HV6xBQ">Adam vs Wąż</a>
        <br />
        <a href="https://www.youtube.com/watch?v=KmGI_YZlYqw">Kain vs Abel</a>
        <br />
        <a href="https://www.youtube.com/watch?v=6MjYtBakc30">Noe vs Bóg</a>
      </p>
      <i>
        Bibliografia:
        <br />
        Pochodzenie nazwy „Genesis” – Wikipedia The Free Encyclopedia,{' '}
        <a href="https://en.wikipedia.org/wiki/Book_of_Genesis">Book of Genesis</a>
        <br />
        Wersety zostały zaczerpnięte z <a href="https://biblia.deon.pl/">Biblii Tysiąclecia</a>.
        wyd. Pallottinum w Poznaniu, 2003
      </i>
    </div>
  </Layout>
);

export default Rodzaju;

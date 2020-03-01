import React from 'react';
import Layout from '../components/Layout/Layout';
import '../components/Books/BookPage.scss';
import Header from '../components/ArticleHeader/ArticleHeader';

const Rodzaju = () => (
  <Layout title="Apokalipsa Świętego Jana">
    <Header title="Apokalipsa Świętego Jana" img="" credit={<a href=""></a>} />
    <div className="wrapper">
      <q>Wstąp tutaj, a to ci ukażę, co potem musi się stać.</q>
      <br />
      <i>~Ap 4,1</i>
      <h2>Apokalipsa św. Jana w pigułce</h2>
      <ul>
        <li>Ostatnia księga przyjęta do kanonu Biblii. </li>
        <li>
          Jest listem, który św. Jan napisał „do siedmiu kościołów, które są w Azji” <i>(Ap 1,4)</i>
        </li>
        <li>Zawiera opis końca świata, którego widzenie miało być objawione św. Janowi.</li>
        <li>
          Nazwa pochodzi od greckiego słowa αποκάλυψη i oznacza „objawienie”. W języku angielskim
          tytuł tej księgi to „Book of Revelations”
        </li>
        <li>Jest pełna symboli i ukrytego znaczenia liczb.</li>
      </ul>
      <h2>Pojęcia i definicje</h2>
      <p>
        <b>Apokalipsa</b> – słowo „apokalipsa” zyskało dużo dodatkowych znaczeń, również tych
        pozabiblijnych. Przykładowe znaczenia to: „coś przerażającego”, „katastroficzna wizja lub
        przepowiednia”, „utwór lub obraz, którego tematem jest prorocza, groźna wizja przyszłości”.
        <br />
        <b>Czterej jeźdźcy apokalipsy</b> – cztery postacie opisane w szóstym rozdziale. Zwycięzca,
        Wojna, Głód i Śmierć przedstawiani są w sztuce jako konni rycerze.
        <br />
        <b>Liczba 666</b> – uważana za liczbę Nerona lub Antychrysta, jest pełna dodatkowych
        znaczeń.
      </p>
      <h2>Ukryte znaczenia liczby 666</h2>
      <q>
        Tu jest [potrzebna] mądrość. Kto ma rozum, niech liczbę Bestii przeliczy: liczba to bowiem
        człowieka. A liczba jego: sześćset sześćdziesiąt sześć.
      </q>
      <i>~Ap 13,18</i>
      <p>
        <ol>
          <li>
            Imię rzymskiego cesarza Nerona. Powiązanie to zostało określone za pomocą hebrajskiego
            systemu numerologii zwanego „gemartia”, w którym słowom można przypisać matematyczną
            wartość.
          </li>
          <li>
            Odniesienie do sześciu dni stworzenia, z naciskiem na dzień szósty, w którym został
            stworzony człowiek oraz z pominięciem dnia siódmego, w którym Bóg odpoczywał.
            Przypomnijmy, że 7 oznacza w Biblii pełnię, podczas gdy 6 oznacza koherencję i jest
            zaprzeczeniem siódemki.
          </li>
          <li>Odniesienie do sześciuset lat, przez które żył Noe.</li>
          <li>Odniesienie do czasu istnienia świata. Starożytni wierzyli, że świat ma 6000 lat.</li>
        </ol>
      </p>
      <i>
        Bibliografia:
        <br />
        Wersety zostały zaczerpnięte z <a href="https://biblia.deon.pl/">Biblii Tysiąclecia</a>.
        wyd. Pallottinum w Poznaniu, 2003
        <br />
        Znaczenia liczby 666 – Johnatan Pageau, - The Surprising Symbolism of 666
        <br />
        Znaczenia słowa „Apokalipsa” – 
        <a href="https://sjp.pwn.pl/sjp/apokalipsa;2440946.html">Słownik języka polskiego PWN</a>
        <br />
        Znaczenia słów „Psalm” i „Psałterz” Postacie
      </i>
    </div>
  </Layout>
);

export default Rodzaju;

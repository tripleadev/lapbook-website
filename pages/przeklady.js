import React from 'react';
import Layout from '../components/Layout/Layout';
import '../components/Books/BookPage.scss';
import Header from '../components/ArticleHeader/ArticleHeader';

const Przeklady = () => (
  <Layout title="Przekłady Biblii">
    <Header
      title="Przekłady Biblii"
      img="https://images.unsplash.com/photo-1512131852012-622823c149e2"
      credit={
        <>
          <a href="https://unsplash.com/photos/L4gw27XZN1I">Kiwihug</a> on Unsplash
        </>
      }
    />
    <div className="wrapper">
      Przekłady Biblii Po spisaniu wpierw przekazywanej ustnie treści Biblii, aby dotarła ona do jak
      największej ilości odbiorców, pojawiła się potrzeba napisania przekładów. Pierwsze z nich
      pochodzą z III w p. n. e., a nowe powstają do dzisiaj.
      <h2>Lista najważniejszych przekładów Biblii:</h2>
      <ul>
        <li>
          Septuaginta – pierwszy przekład Biblii na język grecki. Powstała na w III i II wieku p. n.
          e., z języka oryginału starożytnych Pism Hebrajskich. Nazwa pochodzi od siedemdziesięciu
          (a dokładnie 72) tłumaczy, którzy spisali przekład.
        </li>
        <li>
          Wulgata – pierwsze tłumaczenie całej Biblii na łacinę. Tłumaczenia dokonał Hieronim na
          przełomie IV i V wieku. Nazwa pochodzi od łacińskiego słowa vulgata – powszechna
        </li>
        <li>
          Biblia Jakuba Wujka – w miarę rozwoju chrześcijaństwa w Europie, zaczęły powstawać
          przekłady Biblii na języki narodowe. Pierwszym takim w Polsce był przekład jezuity Jakuba
          Wujka, wydany w 1559 roku. Ze względu na piękny język i wierność oryginałowi, zaliczana
          jest ona do klasyki polskiego piśemnictwa.
        </li>
        <li>
          Biblia Tysiąclecia – najbardziej popularny obecnie przekład Biblii. Tłumaczenia z języków
          oryginalnych dokonali benedyktyni tynieccy z Krakowa. Był to drugi w historii przekład
          całej Biblii na język polski (po przekładzie Jakuba Wujka). Wydana po raz pierwszy w 1965
          roku. Biblia Tysiąclecia na początku wywołała kontrowersje zrywając z tradycyjnym językiem
          biblijnym, ale po upływie lat sama go zdefiniowała.
        </li>
      </ul>
      <h2>Przydatne linki</h2>
      <a href="https://www.bible.com/pl/">Aplikacja Bible</a> - aplikacja umożliwiająca czytanie i
      przeglądanie Biblii w ponad 900 przekładach
    </div>
  </Layout>
);

export default Przeklady;

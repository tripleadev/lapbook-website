import React from 'react';
import Layout from '../components/Layout/Layout';
import '../components/Books/BookPage.scss';
import Header from '../components/ArticleHeader/ArticleHeader';

const Przeklady = () => (
  <Layout title="Przekłady Biblii">
    <Header
      title="Przekłady Biblii"
      img="https://ocdn.eu/pulscms-transforms/1/BjBktkqTURBXy8zOGM2YjFkMGMzMmM4ZmZkNjQ4MTgwYWU1Njc5NjFkMi5qcGVnkZUDAMyUzRKQzQpx"
      credit={
        <a href="https://www.shutterstock.com/pl/image-photo/deventer-netherlands-march-16-old-dutch-153715283">
          Shutterstock - by hans engbers
        </a>
      }
    />
    <div className="wrapper">
      <p>
        Przekłady Biblii Po spisaniu wpierw przekazywanej ustnie treści Biblii, aby dotarła ona do
        jak największej ilości odbiorców, pojawiła się potrzeba napisania przekładów. Pierwsze z
        nich pochodzą z III w p. n. e., a nowe powstają do dzisiaj.
      </p>
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
      <p>
        <a href="https://www.bible.com/pl/">Aplikacja Bible</a> - aplikacja umożliwiająca czytanie i
        przeglądanie Biblii w ponad 900 przekładach
        <br />
        <a href="https://biblia.deon.pl">Biblia Deon</a> - cała Biblia Tysiąclecia w wersji online
      </p>
    </div>
  </Layout>
);

export default Przeklady;

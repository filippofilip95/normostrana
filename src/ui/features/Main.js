import Router from "preact-router";
import Header from './Header';
import TranslationsProvider from './TranslationsProvider';
import Calculator from '../routes/calculator';
import Normostrana from "../routes/normostrana";

const Main = () => (
  <TranslationsProvider>
    <div id="app">
      <Header/>
      <main class="content">
        <Router>
          <Calculator path='/'/>
          <Normostrana path='/normostrana'/>
        </Router>
      </main>
    </div>
  </TranslationsProvider>
);

export default Main;

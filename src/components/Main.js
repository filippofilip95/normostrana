import Header from './Header';
import Footer from './Footer';
import Faqs from './Faqs';
import Calculator from './Calculator';
import TranslationsProvider from './TranslationsProvider';

const Main = () => (
	<TranslationsProvider>
		<div id="app">
			<Header />
			<main class="content">
				<Calculator />
				<Faqs />
				<Footer />
			</main>
		</div>
	</TranslationsProvider>
);

export default Main;

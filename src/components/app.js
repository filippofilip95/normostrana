import { h, Component } from 'preact';

// components
import Header from './header';
import Footer from './footer';

// routes
import Home from './home';

export default class App extends Component {
	
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<div class="content">
					<Home path="/" />
					<Footer />
				</div>
			</div>
		);
	}
}

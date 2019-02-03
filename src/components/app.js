import { h, Component } from 'preact';
import { Router } from 'preact-router';

// components
import Header from './header';
import Footer from './footer';

// routes
import Home from '../routes/home';

export default class App extends Component {
	
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<div class="content">
					<Router onChange={this.handleRoute}>
						<Home path="/" />
					</Router>
					<Footer />
				</div>
			</div>
		);
	}
}

import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<header class="header">
		<h1>Normostrana</h1>
		<nav>
			<Link activeClassName="active" href="/">Výpočet</Link>
		</nav>
	</header>
);

export default Header;

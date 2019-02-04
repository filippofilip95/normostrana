import { h } from 'preact';

const Header = ({ translations }) => (
	<header class="header">
		<h1>{translations.headerTitle}</h1>
	</header>
);

export default Header;

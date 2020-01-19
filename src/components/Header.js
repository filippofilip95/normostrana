import { useTranslations } from './TranslationsProvider';

const Header = () => {
	const { translations } = useTranslations();

	return (
		<header class="header">
			<title>
				{translations.headerTitle}
			</title>
		</header>
	);
};

export default Header;

import translationsString, { getLangs } from '../assets/translations';
import { useTranslations } from './TranslationsProvider';

const Footer = () => {
	const { setTranslation, translations } = useTranslations();

	return (
		<footer>
			<p class="footer-text">{translations.license}</p>
			<div class="footer-select">
				<label for="lang-select">{translations.language}</label>
				<select
					id="lang-select"
					onChange={setTranslation}
					value={translations.lang}
				>
					{getLangs().map(lang => (
						<option label={translationsString[lang].localLangName} value={lang}>
							{lang}
						</option>
					))}
				</select>
			</div>
		</footer>
	);
};

export default Footer;

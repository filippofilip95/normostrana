import { useTranslations } from './TranslationsProvider';

const CalculatorResults = ({ standardPagesCount, charCount, charCountWithoutSpace }) => {
	const { translations } = useTranslations();
	
	if (!standardPagesCount) {
		return null;
	}

	return (
		<section class="card">
			<h3>{translations.resultHeader}</h3>
			<p class="results">
				<strong>
					{standardPagesCount.toLocaleString()}
				</strong>{' '}
				{translations.standardPages}
				<br />
				<strong>
					{charCount.toLocaleString()}
				</strong>{' '}
				{translations.charsWithSpaces}
				<br />
				<strong>
					{charCountWithoutSpace.toLocaleString()}
				</strong>{' '}
				{translations.charsWithoutSpaces}
			</p>
		</section>
	);
};


export default CalculatorResults;
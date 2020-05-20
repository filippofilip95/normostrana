import { useTranslations } from '../TranslationsProvider';

const CalculatorResults = ({ standardPagesCount, charCount, charCountWithoutSpace }) => {
	const { translations } = useTranslations();

	if (!standardPagesCount) {
		return null;
	}

	return (
		<section class="card">
			<h3>{translations.resultHeader}</h3>
			<ul class="results">
				<li>
					<strong>
						{standardPagesCount.toLocaleString()}
					</strong>{' '}
					{translations.standardPages}
				</li>
				<li>
					<strong>
						{charCount.toLocaleString()}
					</strong>{' '}
					{translations.charsWithSpaces}
				</li>
				<li>
					<strong>
						{charCountWithoutSpace.toLocaleString()}
					</strong>{' '}
					{translations.charsWithoutSpaces}
				</li>
			</ul>
		</section>
	);
};


export default CalculatorResults;
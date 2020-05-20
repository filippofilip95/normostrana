import { useTranslations } from '../TranslationsProvider';

const Faqs = () => {
	const { translations } = useTranslations();

	return (
		<article class="card faq">
			<header>
				<h3>{translations.faqTitle}</h3>
			</header>
			<details open>
				<summary>
					<strong>
						{translations.faqQuestion5}
					</strong>
				</summary>
				<p>
					<ul>
						<li>{translations.btRange}</li>
						<li>{translations.dtRange}</li>
						<li>{translations.ditRange}</li>
					</ul>
					<i>{translations.thesisRangeCaption}.</i>
				</p>
			</details>
			<details open>
				<summary>
					<strong>
						{translations.faqQuestion1}
					</strong>
				</summary>
				<p>
					{translations.faqAnswer1}
				</p>
			</details>
			<details open>
				<summary>
					<strong>
						{translations.faqQuestion2}
					</strong>
				</summary>
				<p>
					{translations.faqAnswer2}
				</p>
			</details>
			<details open>
				<summary>
					<strong>
						{translations.faqQuestion3}
					</strong>
				</summary>
				<p>
					{translations.faqAnswer3}
				</p>
			</details>
			<details open>
				<summary>
					<strong>
						{translations.faqQuestion4}
					</strong>
				</summary>
				<p>
					{translations.faqAnswer4}
				</p>
			</details>
		</article>
	);
};

export default Faqs;

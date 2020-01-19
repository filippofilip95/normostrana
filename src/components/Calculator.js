import { useRef } from 'preact/hooks';
import { useSetState } from './libs';
import { useTranslations } from './TranslationsProvider';
import CalculatorResults from './CalculatorResults';

const Calculator = () => {
	const textareaRef = useRef();
	const { translations } = useTranslations();
	const [state, setState] = useSetState({
		standardPages: null,
		charCount: null,
		charCountWithoutSpaces: null
	});

	const { standardPagesCount, charCount, charCountWithoutSpaces } = state;

	const onHandleClick = () => {
		const value = textareaRef.current.value;
		const charCount = value.length;
		const charCountWithoutSpaces = value.replace(/\s/g, '').length;
		const standardPagesCount = parseFloat(charCount / 1800).toFixed(2);

		setState({
			standardPagesCount,
			charCount,
			charCountWithoutSpaces
		});
	};

	return (
		<div>
			<section class="card">
				<h1>{translations.mainHeader}</h1>
				<label for="textarea-input">
					<h2 class="how-to-title">{translations.secondaryHeader}</h2>
				</label>
				<textarea
					id="textarea-input"
					ref={textareaRef}
				/>
				<button onClick={onHandleClick}>
					{translations.calculateButton}
				</button>
			</section>
			<CalculatorResults
				standardPagesCount={standardPagesCount}
				charCount={charCount}
				charCountWithoutSpace={charCountWithoutSpaces}
			/>
		</div>
	);
};

export default Calculator;

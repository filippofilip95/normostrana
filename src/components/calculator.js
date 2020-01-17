import {useRef} from "preact/hooks";
import {useSetState} from "./libs";
import {useTranslations} from "./translationsProvider";

const Calculator = () => {
    const textareaRef = useRef();
    const {translations} = useTranslations();
    const [state, setState] = useSetState({
        standartPages: null,
        charCount: null,
        charCountNoWhitespaces: null,
    })

    const {standartPages, charCount, charCountNoWhitespaces} = state;

    const onHandleClick = () => {
        const value = textareaRef.current.value
        const charCount = value.length
        const charCountNoWhitespaces = value.replace(/\s/g, '').length
        const standartPages = parseFloat(charCount / 1800).toFixed(2)

        setState({
            standartPages,
            charCount,
            charCountNoWhitespaces,
        })
    }

    return (
        <div>
            <section class="card">
                <h2>{translations.mainHeader}</h2>
                <label for="thesis-text">
                    <h4>{translations.secondaryHeader}</h4>
                </label>
                <div class="textarea-wrapper">
                        <textarea
                            id="thesis-text"
                            class="textarea-input"
                            ref={textareaRef}
                        />
                </div>
                <div class="button" onClick={onHandleClick}>
                    {translations.calculateButton}
                </div>
            </section>
            {standartPages && (
                <section class="card">
                    <h3>{translations.resultHeader}</h3>
                    <p class="results">
                        <strong>
                            {standartPages.toLocaleString('sk-SK')}
                        </strong>{' '}
                        {translations.standardPages}
                        <br/>
                        <strong>
                            {charCount.toLocaleString('sk-SK')}
                        </strong>{' '}
                        {translations.charsWithSpaces}
                        <br/>
                        <strong>
                            {charCountNoWhitespaces.toLocaleString('sk-SK')}
                        </strong>{' '}
                        {translations.charsWithoutSpaces}
                    </p>
                </section>
            )}
        </div>
    )
}

export default Calculator

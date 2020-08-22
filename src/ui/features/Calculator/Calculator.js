import {useRef} from 'preact/hooks'
import {trackEvent, useSetState} from '../../../utils/libs'
import {useTranslations} from '../TranslationsProvider'
import CalculatorResults from './CalculatorResults'
import ContentCard from '../../components/ContentCard'
import './Calculator.scss'

const Calculator = () => {
    const textareaRef = useRef()
    const {translations} = useTranslations()
    const [state, setState] = useSetState({
        standardPages: null,
        charCount: null,
        charCountWithoutSpaces: null,
    })

    const {standardPagesCount, charCount, charCountWithoutSpaces} = state

    const onHandleClick = () => {
        trackEvent('click_on_calculate')
        const value = textareaRef.current.value
        const charCount = value.length
        const charCountWithoutSpaces = value.replace(/\s/g, '').length
        const standardPagesCount = (charCount / 1800).toFixed(2)

        setState({
            standardPagesCount,
            charCount,
            charCountWithoutSpaces,
        })
    }

    return (
        <ContentCard title={translations.mainHeader}>
            <label>
                <h2>{translations.secondaryHeader}</h2>
                <textarea
                    id="textarea-input"
                    ref={textareaRef}
                    placeholder={translations.inputPlaceholder}
                    onPaste={() => trackEvent('paste_into_textarea')}
                />
            </label>
            <button
                onClick={onHandleClick}
                type="button"
                aria-label="Calculate"
            >
                {translations.calculateButton}
            </button>
            <CalculatorResults
                standardPagesCount={standardPagesCount}
                charCount={charCount}
                charCountWithoutSpace={charCountWithoutSpaces}
            />
        </ContentCard>
    )
}

export default Calculator

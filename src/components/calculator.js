import { h, Component } from 'preact'

class Calculator extends Component {
    textareaRef

    state = {
        standartPages: null,
        charCount: null,
        charCountNoWhitespaces: null,
    }

    onHandleClick = () => {
        const value = this.textareaRef.value
        const charCount = value.length
        const charCountNoWhitespaces = value.replace(/\s/g, '').length
        const standartPages = parseFloat(charCount / 1800).toFixed(2)

        this.setState({
            standartPages,
            charCount,
            charCountNoWhitespaces,
        })
    }

    render(props, state) {
        const { standartPages, charCount, charCountNoWhitespaces } = state
        const { translations } = props

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
                            ref={ref => {
                                this.textareaRef = ref
                            }}
                        />
                    </div>
                    <div class="button" onClick={this.onHandleClick}>
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
                            <br />
                            <strong>
                                {charCount.toLocaleString('sk-SK')}
                            </strong>{' '}
                            {translations.charsWithSpaces}
                            <br />
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
}

export default Calculator

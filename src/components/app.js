import { h, Component } from 'preact'

// components
import Header from './header'
import Footer from './footer'
import BasicInfoCard from './basicInfoCard'

import TranslationsProvider from './translationsProvider'

// routes
import Calculator from './calculator'

export default class App extends Component {
    handleRoute = e => {
        this.currentUrl = e.url
    }

    render() {
        return (
            <TranslationsProvider>
                {({ translations, setTranslation }) => (
                    <div id="app">
                        <Header translations={translations} />
                        <div class="content">
                            <Calculator translations={translations} />
                            <BasicInfoCard translations={translations} />
                            <Footer
                                translations={translations}
                                setTranslation={setTranslation}
                            />
                        </div>
                    </div>
                )}
            </TranslationsProvider>
        )
    }
}

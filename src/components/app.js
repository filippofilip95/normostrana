import Header from './header'
import Footer from './footer'
import BasicInfoCard from './basicInfoCard'
import Calculator from './calculator'
import TranslationsProvider from './translationsProvider'

const App = () => {
    return (
        <TranslationsProvider>
            <div id="app">
                <Header/>
                <div class="content">
                    <Calculator/>
                    <BasicInfoCard/>
                    <Footer/>
                </div>
            </div>
        </TranslationsProvider>
    )
}

export default App

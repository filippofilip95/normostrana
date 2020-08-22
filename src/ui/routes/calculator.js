import MainCalculator from '../features/Calculator'
import Faqs from '../features/Faqs'
import Footer from '../features/Footer'
import Container from '../components/Container'

const Calculator = () => {
    return (
        <Container size="md">
            <MainCalculator />
            <Faqs />
            <Footer />
        </Container>
    )
}

export default Calculator

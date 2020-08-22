import classNames from 'classnames'
import {useTranslations} from '../TranslationsProvider'
import Link from '../../components/Link'
import './Navigation.scss'
import Container from '../../components/Container'
import HamburgerMenu from '../../components/HamburgerMenu'
import {useState} from 'preact/hooks'

const Navigation = () => {
    const {translations} = useTranslations()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav>
            <Container className="navigation" size="lg">
                <title>
                    <a class="logo" href="https://pocetznakov.sk/">
                        <img
                            alt="logo"
                            src={require('../../../assets/logo.png')}
                        />
                    </a>
                </title>
                <div className="hamburger">
                    <HamburgerMenu
                        isOpen={isOpen}
                        onChange={() => setIsOpen(!isOpen)}
                    />
                </div>
                <div className={classNames('links', isOpen && 'isOpen')}>
                    <Link href="/">{translations.menuItemCalculation}</Link>
                    <Link href="/normostrana">
                        {translations.menuItemNormostrana}
                    </Link>
                    {/*<Link href="/normostrana">O Projekte</Link>*/}
                </div>
            </Container>
        </nav>
    )
}

export default Navigation

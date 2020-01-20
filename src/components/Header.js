import {useTranslations} from './TranslationsProvider';
import IMG_LOGO from '../assets/icons/android-chrome-192x192.png';

const Header = () => {
    const {translations} = useTranslations();

    return (
        <header class="header">
            <img alt='logo' class='logo' src={IMG_LOGO}/>
            <title>
                <a href='https://pocetznakov.sk/'>
                    {translations.headerTitle}
                </a>
            </title>
        </header>
    );
};

export default Header;

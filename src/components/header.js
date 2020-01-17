import {useTranslations} from "./translationsProvider";

const Header = () => {
    const {translations} = useTranslations();

    return (
        <header class="header">
            <h1>{translations.headerTitle}</h1>
        </header>
    )
}

export default Header

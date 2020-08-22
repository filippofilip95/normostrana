import translationsString, {getLangs} from '../../../assets/translations'
import {useTranslations} from '../TranslationsProvider'
import './Footer.scss'

const Footer = () => {
    const {setTranslation, translations} = useTranslations()

    return (
        <footer>
            <label for="lang-select">{translations.language}</label>
            <select
                id="lang-select"
                onChange={setTranslation}
                value={translations.lang}
            >
                {getLangs().map((lang) => (
                    <option
                        label={translationsString[lang].localLangName}
                        value={lang}
                    >
                        {lang}
                    </option>
                ))}
            </select>
        </footer>
    )
}

export default Footer

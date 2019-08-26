import { h } from 'preact'

import translationsString, { getLangs } from '../assets/translations'

const Footer = ({ setTranslation, translations }) => (
    <footer>
        <p class="footer-text">{translations.license}</p>
        <div class="footer-select">
            <label for="lang-select">{translations.language}</label>
            <select
                id="lang-select"
                onChange={setTranslation}
                value={translations.lang}
            >
                {getLangs().map(lang => (
                    <option label={translationsString[lang].localLangName}>
                        {lang}
                    </option>
                ))}
            </select>
        </div>
    </footer>
)

export default Footer

import {createContext} from 'preact';
import {useContext, useEffect} from 'preact/hooks';

import translations from '../assets/translations';
import {useSetState} from "./libs";

export const Translations = createContext({});

export const useTranslations = () => useContext(Translations);

const TranslationsProvider = ({children}) => {
    const [state, setState] = useSetState({translation: 'sk'})
    const {translation} = state;

    useEffect(() => {
        setBrowserTranslation();
    }, []);

    const setTranslation = event => {
        setState({
            translation: event.target.value
        });
    }

    const setBrowserTranslation = () => {
        const browserLang = (
            navigator.language || navigator.userLanguage
        ).substring(0, 2);
        if (Object.keys(translations).includes(browserLang)) {
            setState({translation: browserLang});
        }
    }

    if (typeof window !== 'undefined') {
        document.documentElement.lang = translation;
    }

    console.log(state)

    return (
        <Translations.Provider value={{
            translations: translations[translation],
            setTranslation
        }}
        >
            {children}
        </Translations.Provider>
    );
}

export default TranslationsProvider;

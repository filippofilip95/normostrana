const translations = {
    sk: {
        lang: 'sk',
        localLangName: 'SK',
        headerTitle: 'PocetZnakov.sk',
        mainHeader: 'Výpočet Normostrán a Počet Znakov.',
        secondaryHeader:
            'Vlož text a klikni na Vypočítaj. Počet normostrán a počet znakov sa zobrazí nižšie.',
        inputPlaceholder: 'Text mojej Záverečnej práce...',
        calculateButton: 'Vypočítaj',
        resultHeader: 'Výsledok výpočtu',
        standardPages: 'normostrán',
        charsWithSpaces: 'znakov vrátane medzier',
        charsWithoutSpaces: 'znakov okrem medzier',
        faqTitle: 'Časté otázky a odpovede',
        standardPageCount: '1800',
        stnNorm: 'STN EN ISO 690',
        faqQuestion1: 'Čo je to Normostrana?',
        faqAnswer1:
            'Normostrana znamená normovaná, alebo štandardizovaná strana s počtom 1800 znakov (vrátane medzier, teda aj s medzerami).',
        faqQuestion2: 'Načo sa Normostrana používá?',
        faqAnswer2: 'Používa sa na meranie rozsahu textu podlľa počtu znakov.',
        faqQuestion3: 'Kto určil počet znakov Normostrany?',
        faqAnswer3: 'Koeficient 1800 znakov pre jednu Normostranu je definovaný v norme STN EN ISO 690',
        faqQuestion4: 'Kde sa Normostrana používá?',
        faqAnswer4: 'Používa sa v publicistike, prekladatelstve, a copywritingu. Taktiež sa s nou môžeme stretnúť pri školských prácach, univezitných závarečných prácach a referátoch',
        faqQuestion5: 'Koľko Normostrán / Počet Znakov potrebujem k Zaverečnej práci?',
        btRange:
            'Bakalárska práca: 30 - 40 NS (54 000 až 72 000 znakov vrátane medzier)',
        dtRange: 'Diplomová práca:  50 - 70 NS (90 000 až 126 000 znakov vrátane medzier)',
        ditRange:
            'Dizertačná práca: 80 - 120 strán (144 000 až 216 000 znakov vrátane medzier)',
        thesisRangeCaption:
            'Uvedené rozsahy sú podľa smernice Univerzity UKF v Nitre. Na iných univerzitách sa môžu líšiť.  Vačšinov sú však veľmi podobné alebo identické.',
        license: '',
        language: 'Jazyk:'
    },
    cs: {
        lang: 'cs',
        localLangName: 'CZ',
        headerTitle: 'PocetZnakov.sk',
        mainHeader: 'Výpočet normostran a Počet Znaků.',
        secondaryHeader:
            'Vlož text a klikni na Vypočítej. Počet normostran a počet znaků se zobrazí níže.',
        inputPlaceholder: 'Text mé závěrečné práce ...',
        calculateButton: 'Vypočítej',
        resultHeader: 'Výsledek výpočtu',
        standardPages: 'normostran',
        charsWithSpaces: 'znaků včetně mezer',
        charsWithoutSpaces: 'znaků kromě mezer',
        faqTitle: 'Časté otázky a odpovědi',
        standardPageCount: '1800',
        stnNorm: 'ČSN EN ISO 690',
        faqQuestion1: 'Co je to Normostrana?',
        faqAnswer1:
            'Normostrana rozumí normovaná nebo standardizovaná strana s počtem 1800 znaků (včetně mezer, tedy i s mezerami).',
        faqQuestion2: 'K čemu se Normostrana používá?',
        faqAnswer2: 'Používá se k měření rozsahu textu podle počtu znaků',
        faqQuestion3: 'Kdo určil počet znaků Normostrany?',
        faqAnswer3: 'Koeficient 1800 znaků pro jednu normostranu je definován v normě ČSN EN ISO 690.',
        faqQuestion4: 'Kde se Normostrana používá?',
        faqAnswer4: 'Používá se v publicistice, překladatelství, a copywritingu. Také se s ní můžeme setkat při školních pracích, univezitných závarečných pracích a referátech.',
        faqQuestion5: 'Kolik Normostran / Počet Znaků potřebuji k závěrečné práci?',
        infoRangeHeader: 'Doporučené rozsahy:',
        btRange:
            'Bakalářská práce: 30 - 40 NS (54 000 až 72 000 znaků včetně mezer)',
        dtRange: 'Diplomová práce: 50 - 70 NS (90 000 až 126 000 znaků včetně mezer)',
        ditRange:
            'Disertační práce: 80 - 120 stran (144 000 až 216 000 znaků včetně mezer)',
        thesisRangeCaption:
            'Uvedené rozsahy jsou podle směrnice Univerzity UKF v Nitře. Na jiných univerzitách se mohou lišit. Většinou jsou však velmi podobné nebo identické',
        license: '',
        language: 'Jazyk:'
    }
};

export const getLangs = () => Object.keys(translations);

export default translations;

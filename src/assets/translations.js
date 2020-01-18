const translations = {
	sk: {
		lang: 'sk',
		localLangName: 'SK',
		headerTitle: 'Normostrana',
		mainHeader: 'Výpočet Rozsahu textu a normostrán',
		secondaryHeader:
			'Vlož text a klikni na Vypočítaj. Počet normostrán a znakov sa zobrazí nižšie.',
		calculateButton: 'Vypočítaj',
		resultHeader: 'Výsledok výpočtu',
		standardPages: 'normostrán',
		charsWithSpaces: 'znakov vrátane medzier',
		charsWithoutSpaces: 'znakov okrem medzier',
		faqTitle: 'Časté otázky a odpoveďe',
		standardPageCount: '1800',
		stnNorm: 'STN EN ISO 690',
		faqQuestion1: 'Čo je to Normostrana?',
		faqAnswer1:
			'Normostrana znamená normovaná, alebo štandardizovaná strana s počtom 1800 znakov (vrátane medzier, teda aj s medzerami).',
		faqQuestion2: 'Načo sa Normostrana používá?',
		faqAnswer2: 'Používa sa na meranie rozsahu textu podlľa počtu znakov.',
		faqQuestion3: 'Kto určil počet znakov Normostrany?',
		faqAnswer3: 'Koeficient je 1800 je definovaný v norme STN EN ISO 690.',
		faqQuestion4: 'Kde sa Normostrana používá?',
		faqAnswer4: 'Používa sa v publicistike, prekladatelstve, a copywritingu. Taktiež sa s nou môžeme stretnúť pri školských prácach, univezitných závarečných prácach a referátoch',
		faqQuestion5: 'Koľko Normostrán / počet znakov potrebujem k Zaverečnej práci?',
		btRange:
			'Bakalárska práca - 30 - 40 NS (54 000 až 72 000 znakov vrátane medzier)',
		dtRange: 'Diplomová práca -  50 - 70 NS (90 000 až 126 000 znakov)',
		ditRange:
			'Dizertačná práca - 80 - 120 strán (144 000 až 216 000 znakov)',
		thesisRangeCaption:
			'Uvedené rozsahy sú podľa smernice Univerzity UKF v Nitre. Na iných univerzitách sa môžu líšiť',
		license: '',
		language: 'Jazyk:'
	},
	cs: {
		lang: 'cs',
		localLangName: 'CZ',
		headerTitle: 'Normostrana',
		mainHeader: 'Výpočet Rozsahu textu a normostrán',
		secondaryHeader:
			'Vlož text a klikni na Vypočítej. Počet normostran a znaků se zobrazí níže. ',
		calculateButton: 'Vypočítej',
		resultHeader: 'Výsledek výpočtu',
		standardPages: 'normostran',
		charsWithSpaces: 'znaků včetně mezer',
		charsWithoutSpaces: 'znaků kromě mezer',
		faqTitle: 'Časté otázky a odpovědi',
		standardPageCount: '1800',
		stnNorm: 'ČSN EN ISO 690',
		faqAnswer1:
			'Normostrana rozumí normovaná nebo standardizovaná strana s rozsahem',
		standardPageInfo2:
			'Znaků (včetně mezer) a používá se k měření rozsahu textu. Koeficient je definován v normě ',
		standardPageShortName: 'NS',
		standardPageUsage1: 'Normostrana se někdy označuje také jako ',
		standardPageUsage2:
			'A používá se v publicistice, překladatelství, a copywritingu. Také se s ní můžeme setkat při školních pracích, univezitných závarečných pracích a referátech',
		infoRangeHeader: 'Doporučené rozsahy:',
		btRange:
			'Bakalářská práce - 30 - 40 NS (54 000 až 72 000 znaků včetně mezer)',
		dtRange: 'Diplomová práce - 50 - 70 NS (90 000 až 126 000 znaků)',
		ditRange:
			'Disertační práce - 80 - 120 stran (144 000 až 216 000 znaků)',
		thesisRangeCaption:
			'Uvedené rozsahy jsou podle směrnice Univerzity UKF v Nitře. Na jiných univerzitách se mohou lišit. Vačšinov sú však veľmi podobné alebo identické v rámci ostatných univerzít.',
		license: 'bla bla',
		language: 'Jazyk:'
	}
};

export const getLangs = () => Object.keys(translations);

export default translations;

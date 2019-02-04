const translations = {
	sk: {
		lang: 'sk',
		localLangName: 'SK',
		headerTitle: 'Normostrana',
		mainHeader: 'Výpočet Rozsahu textu',
		secondaryHeader: 'Vlož text a klikni na Vypočítaj. Počet normostrán a znakov sa zobrazí nižšie.',
		calculateButton: 'Vypočítaj',
		resultHeader: 'Výsledok výpočtu',
		standardPages: 'normostrán',
		charsWithSpaces: 'znakov vrátane medzier',
		charsWithoutSpaces: 'znakov okrem medzier',
		infoHeader: 'Informácie',
		standardPageCount: '1800',
		stnNorm: 'STN EN ISO 690',
		standardPageInfo1: 'Normostrana znamená normovaná, alebo štandardizovaná strana s rozsahom ',
		standardPageInfo2: 'znakov (vrátane medzier) a používa sa na meranie rozsahu textu. Koeficient je definovaný v norme ',
		standardPageShortName: 'NS',
		standardPageUsage1: 'Normostrana sa niekedy označuje aj ako ',
		standardPageUsage2: 'a používa sa v publicistike, prekladatelstve, a copywritingu. Taktiež sa s nou môžeme stretnúť pri školských prácach, univezitných závarečných prácach a referátoch',
		infoRangeHeader: 'Odporúčané rozsahy:',
		btRange: 'Bakalárska práca - 30 - 40 NS (54 000 až 72 000 znakov vrátane medzier)',
		dtRange: 'Diplomová práca -  50 - 70 NS (90 000 až 126 000 znakov)',
		ditRange: 'Dizertačná práca - 80 - 120 strán (144 000 až 216 000 znakov)',
		thesisRangeCaption: 'Uvedené rozsahy sú podľa smernice Univerzity UKF v Nitre. Na iných univerzitách sa môžu líšiť',
		license: 'Projekt je pod volnou licenciou MIT.'
	},
	cs: {
		lang: 'cs',
		localLangName: 'CZ',
		headerTitle: 'Normostrana',
		mainHeader: 'Výpočet Rozsahu textu',
		secondaryHeader: 'Vlož text a klikni na Vypočítej. Počet normostran a znaků se zobrazí níže. ',
		calculateButton: 'Vypočítej',
		resultHeader: 'Výsledek výpočtu',
		standardPages: 'normostran',
		charsWithSpaces: 'znaků včetně mezer',
		charsWithoutSpaces: 'znaků kromě mezer',
		infoHeader: 'Informace',
		standardPageCount: '1800',
		stnNorm: 'ČSN EN ISO 690',
		standardPageInfo1: 'Normostrana rozumí normovaná nebo standardizovaná strana s rozsahem',
		standardPageInfo2: 'Znaků (včetně mezer) a používá se k měření rozsahu textu. Koeficient je definován v normě ',
		standardPageShortName: 'NS',
		standardPageUsage1: 'Normostrana se někdy označuje také jako ',
		standardPageUsage2: 'A používá se v publicistice, překladatelství, a copywritingu. Také se s ní můžeme setkat při školních pracích, univezitných závarečných pracích a referátech',
		infoRangeHeader: 'Doporučené rozsahy:',
		btRange: 'Bakalářská práce - 30 - 40 NS (54 000 až 72 000 znaků včetně mezer)',
		dtRange: 'Diplomová práce - 50 - 70 NS (90 000 až 126 000 znaků)',
		ditRange: 'Disertační práce - 80 - 120 stran (144 000 až 216 000 znaků)',
		thesisRangeCaption: 'Uvedené rozsahy jsou podle směrnice Univerzity UKF v Nitře. Na jiných univerzitách se mohou lišit',
		license: 'Projekt je pod volnou licencí MIT.'
	}
};

export const getLangs = () => Object.keys(translations);

export default translations;
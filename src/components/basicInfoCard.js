import { h } from 'preact';

const BasicInfoCard = () => 		(
	<section class="card">
		<h3>Informácie</h3>
		<p>
            Normostrana znamená normovaná, alebo štandardizovaná strana s rozsahom <strong>1800</strong> znakov (vrátane medzier) a používa sa na meranie rozsahu textu. Koeficient je definovaný v norme <i>STN EN ISO 690</i>.
		</p>
		<p>
            Normostrana sa niekedy označuje aj ako <strong>NS</strong> a používa sa v publicistike, prekladatelstve, a copywritingu. Taktiež sa s nou môžeme stretnúť pri školských prácach, univezitných závarečných prácach a referátoch.
		</p>
		<h4>Odporúčané rozsahy:</h4>
		<ul>
			<li>Bakalárska práca - 30 - 40 NS (54 000 až 72 000 znakov vrátane medzier) </li>
			<li>Diplomová práca -  50 - 70 NS (90 000 až 126 000 znakov) </li>
			<li>Dizertačná práca - 80 - 120 strán (144 000 až 216 000 znakov) </li>
		</ul>
		<i>Uvedené rozsahy sú podľa smernice Univerzity UKF v Nitre. Na iných univerzitách sa môžu líšiť.</i>
		
	</section>
);

export default BasicInfoCard;